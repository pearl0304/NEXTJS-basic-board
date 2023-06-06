/**
 * CHECK NULL VALUE
 * @param type
 * @param data
 * @returns {(number|string)[]}
 */
export default function checkNull(type, data) {
  let statusCode = 200;
  let message = "SUCCESS";

  switch (type) {
    case "write":
      const userId = data.userId;
      const displayName = data.displayName;
      const title = data.title;
      const contents = data.contents;

      if (!userId) {
        statusCode = 400;
        message = "Please write user id";
      }

      if (!displayName) {
        statusCode = 400;
        message = "Please write user displayName";
      }

      if (!title) {
        statusCode = 400;
        message = "Please write user title";
      }

      if (!contents) {
        statusCode = 400;
        message = "Please write user contents";
      }
      break;
  }

  let result = [statusCode, message];
  return result;
}
