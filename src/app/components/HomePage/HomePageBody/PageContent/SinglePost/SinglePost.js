import React from 'react';
import { Link } from 'react-router-dom';

export default function Singlepost() {
  return (
    <div>
      <div className="pb-2 pb-lg-4">
        <h1 className="display-4 mb-2 font-weight-bold">Luke, I am your Bro</h1>
        <div className="d-flex ">
          <div className="mr-2 mr-lg-4">
            <div
              className="rounded-circle "
              style={{ width: '30px', height: '30px' }}
            >
              <img
                src="/media/avatar-img.png"
                height="100%"
                width="100%"
                alt="avatar"
              />
            </div>
          </div>
          <div>
            <span className="small text-muted font-italic">
              By <Link to="/">John Doe</Link> In <Link to="/">Business</Link>{' '}
              Posted May 24, 2013
            </span>
          </div>
        </div>
      </div>
      <hr />
      <div className="row py-3">
        <div className="col-12">
          <div className="row small">
            <div className="col-6 col-lg-3 mb-2 mb-lg-0">
              <div className="row">
                <div
                  className="btn btn-google w-100 text-white d-flex align-items-center"
                  style={{ justifyContent: 'space-evenly' }}
                >
                  <div>
                    <i className="fa fa-google-plus" aria-hidden="true" />
                  </div>
                  <span
                    style={{
                      width: '1px',
                      backgroundColor: 'white',
                      height: '100%',
                    }}
                  />
                  <span className="small text-center">Share on Google +</span>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3 mb-2 mb-lg-0">
              <div className="row">
                <div
                  className="btn btn-facebook w-100 text-white d-flex align-items-center"
                  style={{ justifyContent: 'space-evenly' }}
                >
                  <div>
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </div>
                  <span
                    style={{
                      width: '1px',
                      backgroundColor: 'white',
                      height: '100%',
                    }}
                  />
                  <span className="small text-center">Share on Facebook</span>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3 mb-2 mb-lg-0">
              <div className="row">
                <div
                  className="btn btn-twitter w-100 text-white d-flex align-items-center"
                  style={{ justifyContent: 'space-evenly' }}
                >
                  <div>
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </div>
                  <span
                    style={{
                      width: '1px',
                      backgroundColor: 'white',
                      height: '100%',
                    }}
                  />
                  <span className="small text-center">Share on Twitter</span>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3 mb-2 mb-lg-0">
              <div className="row">
                <div
                  className="btn btn-whatsapp w-100 text-center text-white d-flex align-items-center"
                  style={{ justifyContent: 'space-evenly' }}
                >
                  <div>
                    <i className="fa fa-whatsapp " aria-hidden="true" />
                  </div>
                  <span
                    style={{
                      width: '1px',
                      backgroundColor: 'white',
                      height: '100%',
                    }}
                  />
                  <span className="small  text-center">Share on Whatsapp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="post-body pb-1">
        <p className="first-para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          atque culpa cumque ea, eius eum eveniet exercitationem, fugiat hic in
          iste laudantium mollitia natus nobis quaerat ratione voluptas! Amet
          dolorem ipsam officia quaerat voluptate. Aspernatur eaque facere ullam
          vero! Accusantium asperiores assumenda deleniti dignissimos enim, fuga
          ipsam iste libero natus nulla praesentium quasi repellendus,
          temporibus? Consectetur dolorum iure nesciunt porro.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
          consectetur debitis dicta dignissimos ducimus ea earum esse et, itaque
          iure iusto maxime neque nesciunt nisi officia provident, quae quis
          quisquam quos, recusandae sequi sint unde veniam!
          <span>
            <div className="float-left d-inline-block inline-card">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/media/card-img.png"
                  alt="Card"
                />
                <div className="card-body">
                  <h5 className="card-title small font-weight-bold mb-1">
                    How to disappear completely and never be found
                  </h5>
                  <p className="card-text text-muted small font-italic">
                    Photo copyright Jason Gilespy
                  </p>
                </div>
              </div>
            </div>
          </span>
          Accusantium autem blanditiis, error est ex harum, illo illum laborum
          maiores nam nisi officiis, porro quas quisquam repellendus suscipit
          voluptas. Accusantium aliquam aut commodi consequatur cumque
          doloremque dolores, dolorum eius eligendi eum illum laborum modi natus
          necessitatibus neque non officiis quidem quisquam quos, recusandae
          rerum saepe sequi sunt tempora tempore totam voluptas voluptatibus? Ad
          explicabo nihil nobis pariatur perferendis quia sint velit!
          Consequatur doloribus eveniet officia sit voluptatibus. Accusantium
          animi at consequuntur eaque, eum explicabo, fugiat id neque
          perferendis quam repudiandae sequi soluta. Ab accusamus aliquam,
          architecto atque beatae consequuntur culpa deserunt dolor doloremque
          dolorum earum eius enim exercitationem facilis inventore ipsum magni
          maxime molestiae molestias nihil nisi numquam optio possimus quae
          quaerat quasi quis quisquam quos ratione rem repellendus sed ullam
          voluptatum? Consectetur eos fuga officiis reprehenderit? Alias,
          aspernatur, quisquam! Accusamus asperiores assumenda consequatur
          dolores, earum esse facilis laborum minima molestias mollitia neque
          quas quos rem reprehenderit suscipit vitae voluptate? Architecto
          debitis dicta ea error facilis id maiores nobis non possimus sed sunt,
          vitae! Asperiores consequuntur, dolore dolorum error facilis ipsa
          ipsam iste laudantium libero omnis praesentium quae quidem quod sequi
          ullam vel vero voluptate voluptatem. Accusantium amet asperiores
          fugiat ipsa libero magni minima molestiae mollitia nobis non numquam
          odio quae quam, quod recusandae repellat voluptas. Ea eius fugit id,
          molestiae sed unde!
        </p>
        <div className="w-25 my-2  my-lg-4 m-auto">
          <hr />
        </div>
        <div className="container">
          <blockquote className="blockquote text-center w-75 m-auto">
            <p className="h1 font-weight-bold text-dark">
              “Train yourself to let go of everything you fear to lose.”
            </p>
            <footer>Master Yoda</footer>
          </blockquote>
        </div>
        <div className="w-25 my-2  my-lg-4 m-auto">
          <hr />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          aspernatur atque consectetur cumque ea, eligendi eum ex expedita
          explicabo impedit ipsam minus nesciunt officia porro quia sed unde?
          Consequatur, cum placeat. A architecto harum nesciunt nulla placeat
          quo, voluptas voluptatibus.
        </p>
        <div className="d-flex justify-content-center my-2 my-lg-5">
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm rounded-0 mr-2 px-3"
          >
            Design
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm rounded-0 mr-2 px-3"
          >
            Branding
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm rounded-0 mr-2 px-3"
          >
            Art
          </button>
        </div>
        <hr />
      </div>
    </div>
  );
}
