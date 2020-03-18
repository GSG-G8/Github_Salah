import Swal from 'sweetalert2';

const fire = ({ name, avatar_url, public_repos, followers }) => {
  Swal.fire({
    title: `${name} !`,
    imageUrl: avatar_url,
    imageWidth: 300,
    imageHeight: 200,
    html:
      `<h3>  ${public_repos} Repos</h3> ` +
      '<br>' +
      `<div> <img src="https://img.icons8.com/ios/50/000000/facebook-like.png"/>
      <h3>    ${followers} Likes<h3/></div>`,
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
  });
};

export default fire;
