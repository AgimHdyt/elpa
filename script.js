const header = document.querySelector("header");
const menu = document.querySelector(".fa-bars");
const nav = document.querySelector(".nav");

window.onscroll = ()=>{
    if(window.scrollY > 100){
        header.classList.add("scroll")
    }
    else{
        header.classList.remove("scroll")
    }
}

menu.addEventListener("click", ()=>{
    nav.classList.toggle('active');
    menu.classList.toggle('fa-xmark');
})

// INI BUAT NGE SET DATA UNTUK DIKIRIM ATAU BIAR BISA DI AMBIL DI HALAMAN BERIKUTNYA 
document.addEventListener('DOMContentLoaded', function() {

    var pesanSekarangButtons = document.querySelectorAll('.pesan-sekarang');

    pesanSekarangButtons.forEach(button => {
        button.addEventListener('click', () => {

            // Ambil id timbol produk yg dipilih
            const id = button.getAttribute('id')
            const card = button.parentElement;

            // Ambil detail produk dari atribut data
            const productName = card.querySelector('.p-content h3').textContent
            const productPrice = card.querySelector('.p-content .price p').textContent
            // const productDescription = card.querySelector('#produk-1 #desc').textContent


            // Simpan detail produk dalam sessionStorage
            sessionStorage.setItem('id', id);
            sessionStorage.setItem('productName', productName);
            sessionStorage.setItem('productPrice', productPrice);
            // sessionStorage.setItem('productDescription', productDescription);

            // Alihkan ke halaman order.html
            window.location.href = "order.html";
        })
    })
    
});


// INI BUAT NGAMBIL DATA DARI HALAMAN SEBELUMNYA
document.addEventListener('DOMContentLoaded', function() {

    // Ambil data pesan yang dikirim dari halaman sebelumnya
    const productName = sessionStorage.getItem('productName');

    // tampilkan di kolom barang yang dipesan
    document.getElementById('barang').value = productName

});
