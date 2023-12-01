import "./singlePost.css";
import PostImg from "../../assests/post1.jpg";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" alt="" src={PostImg} />
        <h1 className="singlePostTitle">
          Veniam aute aute ea ad enim.
          <div className="singlePostEdit">
            <i class="fa-regular fa-pen-to-square singlePostIcon"></i>
            <i class="fa-solid fa-trash singlePostIcon"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Avdhoot</b>
          </span>
          <span className="singlePostDate">1 hr ago</span>
        </div>
        <p className="singlePostDesc">
          Loremroident id aliquip irure quis aliquip sint irure deserunt labore
          sint ut. Fugiat occaecat dolor ut laboris. Ut consequat exercitation
          esse laborum enim est aute est eu minim exercitation anim do. Ullamco
          aute elit cillum sint Lorem ex. Eu in quis tempor occaecat in
          excepteur laboris aute id. Id incididunt quis id ipsum. Dolor
          incididunt velit non aute Lorem mollit eu eiusmod et. Ad consectetur
          est amet cupidatat ipsum occaecat est incididunt ut. Excepteur tempor
          pariatur nulla ex. Culpa voluptate quis pariatur id fugiat Lorem ex
          eiusmod tempor. Voluptate et labore sint ea proident duis exercitation
          enim magna magna sit. Adipisicing minim laborum pariatur non
          reprehenderit laborum ut et eiusmod. Est elit qui sunt occaecat.
          Laboris laboris sit proident nostrud veniam tempor laborum aliquip
          pariatur sint ea magna esse. Ullamco eu deserunt sint laborum
          voluptate nisi ad Lorem nisi ea. Voluptate laboris tempor minim Lorem
          nulla cillum nisi ad et sint consectetur incididunt veniam ut.
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
