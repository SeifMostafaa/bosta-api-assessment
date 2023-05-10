/* eslint-disable no-underscore-dangle */
const { StatusCodes } = require('http-status-codes');
const { UserModel } = require('../models');

const {
  getReport, changeReportsStatus, sendStatusEmails, sendNotifications,
} = require('../services').reportService;
const { getUrlSubscriptions, getAllChecks } = require('../services').checkService;
const { getMultipleUsersByIds } = require('../services').userService;

const get = async (req, res, next) => {
  const { checkId } = req.query;

  try {
    const report = await getReport(checkId);

    res.statusCode = StatusCodes.OK;
    res.data = {
      report,
    };
  } catch (error) {
    res.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    res.data = {
      status: false,
      error: error.message,
    };
  }
  next();
};

const getReportsByTag = async (req, res) => {
  const userId = req.session.userData._id;

  try {
    const reports = [];
    const checks = await getAllChecks(userId);

    if (!checks) return res.status(400).send("Checks not found");
  
    for (let i = 0; i < checks.length; i++) {
      if (checks[i].tags.includes(req.query.tag)) {
        const result = await getReport(checks[i].id);
        reports.push(result);
      }
    }
    return res.json(reports);

  } catch (error) {
    res.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    res.data = {
      status: false,
      error: error.message,
    };
  }
};


const changeStatus = async (req, res, next) => {
  const { body: { url, status } } = req;

  try {
    await changeReportsStatus(url, status);

    const subscriptions = await getUrlSubscriptions(url);
    const userIds = subscriptions.map((sub) => sub.userId);
    const users = await getMultipleUsersByIds(userIds);

    sendStatusEmails(url, status, users);
    sendNotifications(url, status, subscriptions);
    res.statusCode = StatusCodes.OK;
    res.data = {
      message: 'status updated',
    };
  } catch (error) {
    res.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    res.data = {
      status: false,
      error: error.message,
    };
  }
  next();
};

module.exports = { get, getReportsByTag, changeStatus };
