import React from 'react'
import reactDom from 'react-dom'
import './../node_modules/mdb-ui-kit/css/mdb.min.css'
import { Button } from '@material-ui/core'

const Books = [{
    Image :'https://rukminim1.flixcart.com/image/416/416/kjom6q80-0/regionalbooks/o/i/t/the-psychology-of-money-original-imafvb5vbgcczykj.jpeg?q=70',
    BookName: 'The Psychology of Money ',
    Author :'Housel Morgan'
},
{   Image :'https://rukminim1.flixcart.com/image/416/416/jt7jhjk0/book/6/0/7/wake-up-life-is-calling-original-imafehzjxbac5hsz.jpeg?q=70',
    BookName: 'Wake Up, Life is Calling',
    Author :'Shenoy Preeti'
}, 
{
    Image :'https://rukminim1.flixcart.com/image/416/416/jyeq64w0/book/5/4/0/you-are-the-best-wife-original-imafgkyugczdayt8.jpeg?q=70',
    BookName: 'You are the Best Wife',
    Author :'Pandey Ajay K.'
}]


function Booklist(){
 return (
   <section>
     <div className="container">
         <div className="row text-center">
         {Books.map((book,i) => { 
              return (
                <Book key={i} img={book.Image} title={book.BookName} author={book.Author} />
              )
            })}
         </div>
     </div>
   </section>
 )
}

const Book = ({img,title,author}) =>{  
  return <div className="col-lg-4">
    <img src={img} alt="" /> 
    <h4 style={{color:'#bf73a4'}}>{title}</h4>
    <h5>{author}</h5>
    <Button variant="contained" color="primary">Buy</Button>
  </div>
}


reactDom.render(<Booklist/>,document.getElementById('root'))