import Swal from 'sweetalert2';

errorfunc = () => {
  Swal.fire({
    title: 'Sweet!',
    imageUrl:
      'https://avatars1.githubusercontent.com/u/44713857?s=460&u=43f6c407d897a851bf2b151698b230ad97a24588&v=4',
    imageWidth: 300,
    imageHeight: 200,
    // imageAlt: 'Custom image',
    html:
      '<a href="//sweetalert2.github.io">links</a> ' +
      '<br>' +
      'and other HTML tags' +
      '<br>' +
      '<a href="//sweetalert2.github.io">links</a> ' +
      '<br>' +
      'and other HTML tags' +
      '<br>' +
      '<a href="//sweetalert2.github.io">links</a> ' +
      '<br>' +
      'and other HTML tags' +
      '<br>' +
      '<a href="//sweetalert2.github.io">links</a> ' +
      'and other HTML tags',
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
  });
};
