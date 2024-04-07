import { useState } from "react";
import "./navbar.scss";
import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="../public/assets/logo.png"
            alt=""
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>Hot and Popular</span>
          <span>Watch List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://media.istockphoto.com/id/1458215547/photo/brown-bear.jpg?s=2048x2048&w=is&k=20&c=fseAsXU3g7ZDzbsWP39rZqfxonh_JOqkGg2LRE5rY7g="
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


// const Navbar = () => {
//   const [isSCrolled, setIsScrolled] = useState(false);

//   window.onscroll = () => {
//     setIsScrolled(window.scrollY === 0 ? false : true);
//     return () => (window.onscroll = null);
//   };

//   return (
//     <div className={isSCrolled ? "navbar scrolled" : "navbar"}>
//       <div className="container">
//         <div className="left ">
//           <div className="flex items-center gap-4">
//             <img
//               src="../public/assets/logo.png"
//               alt="logo img"
//               className="h-16 cursor-pointer"
//             />
//             <span className="cursor-pointer">Home</span>
//             <span className="cursor-pointer">Movies</span>
//             <span className="cursor-pointer">Series</span>
//             <span className="cursor-pointer">Hot & Popular</span>
//             <span className="cursor-pointer">WatchList</span>
//           </div>
//         </div>
//         <div className="right flex items-center gap-4 ">
//           <Search className="cursor-pointer" />
//           <span className="cursor-pointer">KID</span>
//           <Notifications className="cursor-pointer" />
//           <img
//             src="https://media.istockphoto.com/id/1458215547/photo/brown-bear.jpg?s=2048x2048&w=is&k=20&c=fseAsXU3g7ZDzbsWP39rZqfxonh_JOqkGg2LRE5rY7g="
//             alt="user img"
//             className="w-10 rounded-lg object-cover cursor-pointer"
//           />
//           <div>
//             <div className="group cursor-pointer">
//               <ArrowDropDown />
//               <div className="options absolute hidden cursor-pointer p-3 rounded-lg bg-black group-hover:flex flex-col gap-3">
//                 <span>Settings</span>
//                 <span>Logout</span>
//                 <span>Preferences</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
