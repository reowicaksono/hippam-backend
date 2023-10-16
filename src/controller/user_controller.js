import response from '../utils/payload.js';
import testServices from '../services/user_services.js'

const getUser = async (req, res) => {
  try {
    const test = await testServices.getUser();
    if (test.length > 0) {
      response({
        statusCode: 200,
        message: 'Hello World',
        data: test,
        res: res,
      });
    } else {
      response({
        statusCode: 404,
        message: 'Data not found',
        res: res,
      });
    }
  } catch (error) {
    response({
      statusCode: 500,
      message: 'Internal Server Error',
      res: res,
    });
  }
};


const postUser = async (req, res) => {
  try {
    const postData = req.body;
    const result = await testServices.postUser(postData);
    response({
      statusCode: 201, 
      message: 'Data created successfully',
      data: result,
      res: res,
    });
  } catch (error) {
  
    response({
      statusCode: 500,
      message: 'Internal Server Error',
      res: res,
    });
  }
};

const putUser = async (req, res) => {
  try {
    const id = req.params.id;
    
    const updatedData = req.body;

    const result = await testServices.putUser(id, updatedData);

    response({
      statusCode: 200,
      message: 'Data updated successfully',
      data: result,
      res: res,
    });
  } catch (error) {
    response({
      statusCode: 500,
      message: 'Internal Server Error',
      res: res,
    });
  }
};

export default {
  getUser,
  postUser,
  putUser,
};
