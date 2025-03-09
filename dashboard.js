function confirmExit(){
    let confirmation = confirm("Apakah Anda yakin ingin keluar?");
    if (confirmation) {
        alert("Anda telah keluar!"); 
        // Tambahkan logika lain jika ingin redirect atau logout
    }
}