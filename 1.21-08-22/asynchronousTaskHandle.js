//promise and handling multiple promises

const callAsyncTask = () => {
  setTimeout(() => {
    const data = {
      id: 2,
    };
    setTimeout(() => {
      if (data.id) {
        data.price = 500;
      } else {
        console.log("Failed to add price", data);
        return data;
      }
      setTimeout(() => {
        if (data.price) {
          data.color = "red";
          console.log("data upto color:", data);
        } else {
          console.log("failed to add color", data);
        }
      }, 500);
    }, 200);
  }, 500);
};
// callAsyncTask();

//This is called call back hell in javascript. To handle this situation and improve readability, we use the promise. Promise has three state. Pending, Resolve, Reject
// const myPromise = new Promise((resolve, reject) => {
//   //   const data = { id: 1 };
//   const data = null;
//   if (data) {
//     resolve("data fetched successfully");
//   } else {
//     reject("Something went wrong fetching data failed");
//   }
// });
// myPromise
//   .then((res) => {
//     console.log("Resoled:", res);
//   })
//   .catch((err) => {
//     console.error("Reject:", err);
//   });

//This is a simple example and working fine but the problems appear when we need to call multiple async tasks inside a synchronous function. Here is an example below:

const multipleAsyncTasksInASyncTask = () => {
  const userId = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const userData = [];
  userId.forEach((id) => {
    myPromise.then((res) => {
      userData.push(res);
    });
  });
  console.log(userData);
};
// multipleAsyncTasksInASyncTask();
// output:[]

//Unexpected output!! To handle this multiple async tasks inside a sync function we use promise.all that accepts an array of promises and return all resolved values. Here is an example below:
const multipleAsyncTasksInASyncTaskHandledByPromiseAll = () => {
  const userId = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const userData = [];
  userId.forEach((id) => {
    userData.push(myPromise);
  });
  console.log("Unresolved", userData);
  const resolveALlPromise = () => {
    Promise.all(userData)
      .then((res) => console.log("Resolved", res))
      .catch((err) => console.log(err));
  };
  resolveALlPromise();
};
// multipleAsyncTasksInASyncTaskHandledByPromiseAll();
// Output:Resolved [
//     'data fetched successfully',
//     'data fetched successfully',
//     'data fetched successfully',
//     'data fetched successfully',
//     'data fetched successfully',
//     'data fetched successfully',
//     'data fetched successfully',
//     'data fetched successfully',
//     'data fetched successfully'
//   ]

//Yeah we have solved the problem but still we are using call back functions. To get rid of this and to write the async code like synchronous which improve readability, we can use async wait.

//Upto this we have used call back, promise to handle asynchronous task. Now we will use async await to handle asynchronous task execution that will increase the readability of the code.

const asyncTaskCallByAsyncAwait = async () => {
  try {
    const data = await myPromise;
    console.log("Resolved:", data);
  } catch (err) {
    console.log("Error Caught:", err);
  }
};
// asyncTaskCallByAsyncAwait();
// Here we have successfully resolved promises without using any call back which is more readable. Another example can be fetching data from an api.
const fetchDataWithoutAsyncAwait = () => {
  fetch("")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
const fetchDataUsingAsync = async () => {
  try {
    const res = await fetch("");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    //error handled by catch block
    const { name, message, stack } = err;

    //sometimes we use logger to store the error for future investigation
    // logger.error({
    //   name,
    //   message,
    //   stack,
    // });

    //to create custom error message we can use Error constructor
    const customError = new Error("This is a custom error");
    //after creating a custom error message we need to throw it for execution
    // throw customError;
  }
};

// To Maintain code base we use module object to split the functions by using module.exports

// module.exports = asyncTaskCallByAsyncAwait; //default export
// module.exports.asyncTaskCallByAsyncAwait = asyncTaskCallByAsyncAwait; //named export
// module.exports.fetchDataWithoutAsyncAwait = fetchDataWithoutAsyncAwait; //named export
//Or we can do named export
//module.exports={asyncTaskCallByAsyncAwait,fetchDataWithoutAsyncAwait}
//two type of exports possible modular,commonjs. Here we have used common js. We can also use modular type import export but for this we will need a package.json file and have to define type= module in that file
