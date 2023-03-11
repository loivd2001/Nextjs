import * as React from 'react';
import { DATA } from '../until/contans';
import styles from '../styles/product.module.scss';
import classnames from 'classnames';
import Link from 'next/link';
const Product = () => {
  return (
    <div className="container px-4 text-center">
      <div className="row">
        <div className="col-3">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
            <div className="input-group-append ">
              <span className="input-group-text">
                <i className="bi bi-search"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="col-9">
          <div className="row">
            {DATA.map((e) => (
              <div key={e.id} className="col-4  mb-4">
                <Link href={`/posts/${e.id}`}>

                  <div className="card-group">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={e.image}
                        alt="something"
                      />
                      <div
                        className={classnames(styles.wrapper_img ,"card-body")}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'start',
                        }}
                      >
                        <h4 className="card-title">{e.title}</h4>
                        <p className="card-text">
                          <small className="text-muted">{e.Copy}</small>
                        </p>
                        <button className="btn btn-outline-danger">
                          <i className="bi bi-play-fill"></i> Chép bài
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
