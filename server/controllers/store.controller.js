const { Types } = require('mongoose');
const config = require('../config');
const { ClientError, DbError } = require('../errors');
const {
  createUserHelper,
  checkDbResOkOne,
  checkDbResNModified,
  checkDbResDeleteCount,
  normalizeUserObject,
  updateUserVersion,
} = require('../helpers');
const { CompanyModel, UserModel, RoomSchema } = require('../models');


const add = (req, res, next) => {
  const entityName = req.params.entityName;
  const entity = req.body;
  const company_id = req.company._id;

  switch (entityName) {
  case 'operator':
    const user = { ...entity };
    user.role = 'manager';
    user._id = new Types.ObjectId();
    user.blocked = false;
    user.activated = false;
    // return next(new DbError('add error'));
    createUserHelper(user)
      .then((savedUser) => {
        return CompanyModel.updateOne(
          { _id: company_id },
          { $push: { users: savedUser._id } },
          { upsert: false },
        );
      })
      .then((result) => checkDbResOkOne(result))
      .then((_) => res.status(200).json(normalizeUserObject(user)))
      .catch((err) => next(err));
    break;
  case 'room':
    const room = { ...entity };
    room._id = new Types.ObjectId();
    CompanyModel.updateOne(
      { _id: company_id },
      { $push: { rooms: room } },
      { upsert: false },
    )
      .then((_) => res.status(200).json(room))
      .catch((err) => next(err));
    break;
  default:
    return next(new ClientError({ message: 'Wrong entity', status: 403 }));
  }
};

const remove = (req, res, next) => {
  const entityName = req.params.entityName;
  const _id = req.params._id;
  const company_id = req.company._id;
  switch (entityName) {
  case 'operator':
    UserModel.deleteOne({ _id })
      .then((result) => checkDbResDeleteCount(result))
      .then((_) => {
        return CompanyModel.updateOne(
          { _id: company_id },
          { $pull: { users: _id } },
          { multi: true },
        );
      })
      .then((result) => checkDbResNModified(result))
      .then((_) => {
        return res.status(200).json(_id);
      })
      .catch((err) => next(err));
    break;
  case 'room':
    CompanyModel.updateOne(
      { _id: company_id },
      { $pull: { 'rooms': {_id} } },
      { upsert: false },
    )
      .then((_) => res.status(200).json(_id))
      .catch((err) => next(err));
    break;
  default:
    return next(new ClientError({ message: 'Wrong entity', status: 403 }));
  }
};

const getAll = (req, res, next) => {
  // console.log('get all');
  const entitiesName = req.params.entitiesName;
  const company = req.company;
  switch (entitiesName) {
  case 'operators':
    UserModel.find({ _id: { $in: company.users } }, { password: 0 })
      .then((users) => res.status(200).json(normalizeUserObject(users)))
      .catch((err) => next(err));
    break;
  case 'rooms':
    CompanyModel.find({ _id: company._id}, {rooms: 1, _id: 0})
      .then((result) => res.status(200).json(result[0].rooms))
      .catch((err) => next(err));
    break;
  default:
    return next(new ClientError({ message: 'Wrong entity', status: 403 }));
  }
};

const getById = (req, res, next) => {
  const entityName = req.params.entityName;
  const _id = req.params._id;
};

const getWithQuery = (req, res, next) => {
  const entityName = req.params.entityName;
  const query = req.query;
};

const update = (req, res, next) => {
  const entityName = req.params.entityName;
  const _id = req.params._id;
  const update = req.body;
  const company_id = req.company._id;

  switch (entityName) {
  case 'operator':
    // self update and admin update
    UserModel.findOneAndUpdate(
      { _id },
      { $set: update },
      {
        upsert: false, // Create a document if one isn't found. if {upsert: false} and added new document, db returns null
        useFindAndModify: false, // use findOneAndUpdate MongoDB driver's instead of findAndModify()
        new: true, // Return NEW document after updates are applied, by default old
        rawResult: false, // return mongoDB object instead of doc (old version of doc included)
      },
    )
      // .then((updatedUser) => updateUserVersion(updatedUser))
      // .then((user) => res.status(200).json(normalizeUserObject(user)))
      .then((updatedUser) => updateUserVersion(updatedUser))
      .then((_) => res.status(200).json())
      .catch((err) => next(err));
    break;
  case 'room':
    const updateQuery = {};
    for (const key in update) {
      if (update.hasOwnProperty(key)) {
        updateQuery['rooms.$.' + key] = update[key];
      }
    }
    // partial update object in array at position $
    CompanyModel.updateOne(
      { '_id': company_id, 'rooms._id': _id },
      { $set: updateQuery},
      {
        upsert: false,
        useFindAndModify: false,
        new: true,
        rawResult: false,
      },
    )
      .then((_) => res.status(200).json())
      .catch((err) => next(err));
    break;
  default:
    return next(new ClientError({ message: 'Wrong entity', status: 403 }));
  }
};

module.exports.storeController = {
  add, remove, getAll, getById, getWithQuery, update,
};
