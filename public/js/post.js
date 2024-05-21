const editFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const content = document.querySelector('#post-content').value.trim();
  const id = window.location.toString().split('/').pop();

  if (title && content) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      const result = await response.json();
      console.error(result);
      alert('Failed to update post.');
    }
  }
};

const deleteButtonHandler = async (event) => {
  const id = window.location.toString().split('/').pop();

  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    const result = await response.json();
    console.error(result);
    alert('Failed to delete post.');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const editForm = document.querySelector('.edit-post-form');
  const deleteButton = document.querySelector('.delete-post-btn');

  if (editForm) {
    editForm.addEventListener('submit', editFormHandler);
  }

  if (deleteButton) {
    deleteButton.addEventListener('click', deleteButtonHandler);
  }
});
