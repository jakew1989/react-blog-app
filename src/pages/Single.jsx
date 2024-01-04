import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={'/write?edit=2'}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor, sit amet consectetur</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quos molestiae reiciendis distinctio perferendis ipsam assumenda labore repudiandae deleniti sapiente vel inventore illum iusto voluptas magni eius nisi necessitatibus aliquid, vero ipsum laboriosam ut, totam earum. Qui, est quia, veniam optio sequi nihil illo corrupti tenetur fuga nostrum obcaecati? Eum natus enim perspiciatis cum voluptate quia animi fugit consequatur repellendus tempore labore, cumque commodi accusantium quos deleniti magni voluptates asperiores ipsam velit debitis saepe earum architecto numquam. Animi non accusantium, perspiciatis quod ab consequatur! Dicta, rerum nesciunt tenetur iure illum molestias, ullam in vitae quo deserunt labore, fugit dolor autem.</p>
      </div>



    <Menu />
    </div>
  )

}

export default Single
