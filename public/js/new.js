const newFormHandler = async function(event) {
  event.preventDefault();

  const body = document.querySelector('textarea[name="post-body"]').value;
  const title = document.querySelector('input[name="post-title"]').value;

  await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#new-post-form')
  .addEventListener('submit', newFormHandler);
