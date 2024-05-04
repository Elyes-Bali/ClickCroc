import { Avatar } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Button, Card, Carousel, ModalTitle } from "react-bootstrap";
import { Link } from "react-router-dom";
import './ItemCard.css';
import { CurrentUser } from "../../apis/UserApi";
import axios from "axios";
import Swal from "sweetalert2";
import { GetAllWishes } from "../../apis/WishApi";
const ItemCard = ({dev,use}) => {
  const [user, setUser] = useState({});
  const [wish, setWish] = useState([]);
  const [userwishes, setUserwishes] = useState([]);
  const isSeller = localStorage.getItem("isSeller");
  const isAdmin = localStorage.getItem("isAdmin");
  const token = localStorage.getItem("token");
  const isManufacturer = localStorage.getItem("isManufacturer");

  const isWish = async () => {
    const oflg = await GetAllWishes();
    setWish(oflg);
  };


  const isUser = async () => {
    const AllUser = await CurrentUser();

    setUser(AllUser.data.user);
  };
  // console.log(user)
  const [create, setCreate] = useState({
    ownerId: "",
    productId: dev._id,
    prodname: dev.prjectname,
    brande: dev.brand,
    price: dev.budget,
    images: dev.images,
    rates:dev.rating,
    
  });
  const hundelUpdate1 =()=>{
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Confirm it!'
      
    }).then((result) => {
      if (result.isConfirmed) {
    setCreate({...create,ownerId:user._id});
        
        handleSubmit();
        Swal.fire(
          'Applayed!',
          'Your Apply is successful.',
          'success'
        )
      }
    })
  }
  let totalRate = 0;
  let totalNumber= 0;

  // Iterate over each rating and sum up the rates
  create.rates.forEach(rating => {
    totalRate += rating.rate;
    totalNumber+=1
  });
  
  // Calculate the average rate
  const averageRate = totalRate /totalNumber
  // console.log(averageRate)
  // console.log(totalNumber)

  const handleSubmit = async () => {
   
    //Object DeStructuring
   
    const config = { headers: { "Content-Type": "application/json" } };
    try {
      const res = await axios.post("/api/wish/create", create, config);
      setCreate({...create,ownerId:user._id});
      // alert(`${res.data.msg}`);
     
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(userwishes) 
  useEffect(() => {
    isUser();
    setCreate({...create,ownerId:user._id});
    isWish();
    // setUserwishes(wish.filter((el) => el.ownerId === user._id));
  }, [user]);
  return (
    <Card className="item-card" style={{ width: "20rem" , margin:"1%" }}>
      <Carousel>
        {dev?.images?.map((el, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={el.filePath}
              alt={`Slide ${index + 1}`}
              style={{ height: "250px", objectFit: "cover" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body>
        {/* <Avatar className="avatar" size="md" cursor="pointer" name={dev?.name} src={dev?.pic}/> */}
        <ModalTitle>{dev?.prjectname?.substring(0,20)}</ModalTitle>
        {/* <Card.Text>
          {dev?.detail?.substring(0,50)}...
        </Card.Text> */}
        <Card.Text>
  {isNaN(averageRate) ? "Not rated yet" : averageRate.toString().substring(0, 3)}&nbsp;<i class="fa fa-star" aria-hidden="true"></i>
</Card.Text>

        
        {/* Multiple buttons */}
        <div className="button-container">
          <Link to={`/dev/${dev._id}`} state={{ dev: dev }}>
            <a className="info-btn">View Details <i class="fa fa-chevron-right ml-2" aria-hidden="true"/></a><hr/>
          </Link>
          {!isSeller && !isAdmin &&!isManufacturer && token &&
          <>
          <a className="contact-btn" onClick={hundelUpdate1}>Wish List <i class="fa fa-heart-o" aria-hidden="true"/></a><hr/>
          </>
}
          {/* Add more buttons as needed */}
        </div>
      </Card.Body>
    </Card>
  )
}



export default ItemCard;
