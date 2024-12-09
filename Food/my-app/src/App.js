import Header from './header';
import Post from './post';
import {data} from './data';
import './index.css';

export default function App() {
  const dataShow = data.map(el => <Post className='' postImage={el.postImage} postTitle={el.postTitle}
    postParagraph={el.postParagraph} postPrice={el.postPrice}/>)
  
  return (
    <div>
      <div className='header'>
      <Header />
      </div>
      <div className='main'>
      {dataShow}
      </div>
    </div>
    
  );
}
