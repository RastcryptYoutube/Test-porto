document.querySelector('.btn-submit').addEventListener('click', function(event) {
    event.preventDefault();

    // Mengambil nilai dari input form
    var title = document.getElementById('title').value;
    var image = document.getElementById('Image').files[0];
    var category = document.getElementById('Category').value;
    var content = document.getElementById('content').value;

    if(title == '' || image == undefined || category == 'Category' || content == '') {
        alert('Please fill all the fields');
        return;
    }

    // Membuat elemen blog-post baru
    var newPost = document.createElement('div');
    newPost.className = 'blog-post';

    // Membuat URL Object dari file gambar
    var imageUrl = URL.createObjectURL(image);

    // Menambahkan konten ke blog-post baru
    newPost.innerHTML = `
        <h2 class="post-title">${title}</h2>
        <p class="post-meta">${category} | Published on ${new Date().toLocaleDateString()}</p>
        <img src="${imageUrl}" alt="Post Image">
        <div class="post-content">
            <p>${content}</p>
        </div>
    `;

    // Menambahkan blog-post baru ke awal new-container
    var container = document.querySelector('.new-container');
    container.insertBefore(newPost, container.firstChild);

    // Mengosongkan form
    document.getElementById('title').value = '';
    document.getElementById('Image').value = '';
    document.getElementById('Category').value = 'Category';
    document.getElementById('content').value = '';
});