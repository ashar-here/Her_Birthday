function showAlert() {
  Swal.fire({
    title: 'Listen! Meri Huraina ',
    text: 'I just wanna marry you! & live with you till my last breath, Do you wanna be wimme like forever?',
    icon: 'question',
    confirmButtonText: 'Yes! ofcourse, I am all yours.',
    showCancelButton: true,
    customClass: {
    popup: 'my-popup-size'
  }
  });
}

setTimeout(()=>{
  Swal.fire('Hey special! I am gonna ask you something special okay!');
},1500);

setTimeout(()=>{
      showAlert();
  }, 5500)