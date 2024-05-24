console.log("post.js is loaded", $(this))
const editFormHandler = async (event) => {
  event.preventDefault();
console.log(event.target)
};


const deleteButtonHandler = async (event) => {
  console.log(event.target.value)

    await fetch(`/api/posts/${event.target.value}`, {
    method: 'DELETE',
  });
  document.location.replace('/dashboard');

};

$("#posts").on("click", ".edit-post", editFormHandler)
$("#posts").on("click", ".delete-post", deleteButtonHandler)
