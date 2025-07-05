const asyncHandler = (requestandler) => {
  (req, res, next) => {
    Promise.resolve(requestandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// const asyncHandler = (fun = async (req, res, next) => {
//   try {
//   } catch (error) {
//     try {
//     } catch (error) {
//       res.status(error.code || 500).json({
//         success: false,
//         message: error.mesage,
//       });
//     }
//   }
// }); 
