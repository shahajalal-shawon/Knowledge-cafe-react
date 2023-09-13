import PropTypes from 'prop-types';
// import { BsBookmark } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleToAddBookmark }) => {
    const {title, cover, author, author_img, posted_date, hashtags, reading_time} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex '>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h2 className='text-2xl'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} minite read</span>
                    <button onClick={handleToAddBookmark} className='ml-2 text-2xl text-red-500'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title }</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href="">#{hash}</a> </span>)
                }
            </p>
        </div>
    );
};

// Blog.proptypes = {
//     blog: PropTypes.object.isRequired
// }

Blog.propTypes ={
    blog: PropTypes.object.isRequired
}

export default Blog;