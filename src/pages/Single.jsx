import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import {Link} from 'react-router-dom'
import Menu from '../components/Menu'


const Single = () => {

  return (
    <div className= "single">
      <div className= "content">
        <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
       <div className="user">
       <img src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
       <div className="info">
       <span>Mel</span>
       <p>Posted 2 days ago</p>
       </div>
       <div className="edit">
        <Link to={`/write?edit=2`}>
        <img src={Edit} alt="" />
        </Link>
        <img src={Delete} alt="" />
       </div>
       </div>
       <h1>"Lorem ipsum dolor sit amet consectetur adipisicing elit"</h1>
       <p>One love, one heart
Let's get together and feel all right
Hear the children cryin' (one love)
Hear the children cryin' (one heart)
Sayin' give thanks and praise to the Lord and I will feel all right
Sayin' let's get together and feel all right
Let them all pass all their dirty remarks (one love)
There is one question I'd really love to ask (one heart)
Is there a place for the hopeless sinners
Who has hurt all mankind just to save his own beliefs?
One love, what about the one heart, one heart
What about, people, let's get together and feel all right
As it was in the beginning one love
So shall it be in the end one heart
<br />
<br />
<p>
All right! Give thanks and praise to the Lord and I will feel all right
Let's get together and feel all right, one more thing
Let's get together to fight this Holy Armagiddyon (one love)
So when the Man comes there will be no, no doom one song
Have pity on those whose chances grows t'inner
There ain't no hiding place from the Father of Creation
Sayin', one love, what about the one heart? one heart
What about the, let's get together and feel all right
I'm pleadin' to mankind one love
Oh, Lord one heart whoa
Give thanks and praise to the Lord and I will feel all right
Let's get together and feel all right
Give thanks and praise to the Lord and I will feel all right
Let's get together and feel all right
</p>
</p>
      </div>
     <Menu />
    </div>
  );
};

export default Single;