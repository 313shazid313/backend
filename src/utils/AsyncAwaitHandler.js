//! method 1 -------------------------------->
const AsyncAwaitHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { AsyncAwaitHandler };

//! method 2 --------------------------------->
//! it is a higher order function which can accept a function as a parameter or can return value
//! basically it is a function in a function
// const AsyncAwaitHandler = (func) => async (req, res, next) => {
//     try {
//       await func(req, res, next);
//     } catch (error) {
//       res.status(error.code || 500).json({
//         success: false,
//         message: error.message,
//       });
//     }
//   };
// export { AsyncAwaitHandler };
