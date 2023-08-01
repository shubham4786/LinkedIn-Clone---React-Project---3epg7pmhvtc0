//user details from local storage
export const getItem = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

//access PostList from localStorage
export const postData = JSON.parse(localStorage.getItem("posts"));
