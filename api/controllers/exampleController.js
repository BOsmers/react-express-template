import asyncHandler from "express-async-handler";

const exampleController = asyncHandler(async (req, res) => {
  const { message } = req.body;

  setTimeout(() => {
    res.status(201).send(`Received message: ${message}`);
  }, 3000);
});

export { exampleController };
