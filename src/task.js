
// import he from "he";
// import { useState } from "react";

// export default function Accordion(){
//   return  <div>
//   {Reddit.data.children.map((value) => {
//     const selftextHtml = value.data.selftext_html;

//     const decodedHtml = selftextHtml ? he.decode(selftextHtml) : null;

//     const Accordion = ({ value }) => {
//       const [activeIndex, setActiveIndex] = useState(null);

//       const itemClick = (index) => {
//         setActiveIndex(index === activeIndex ? null : index);
//       };

//       const renderedItems = value.data.map((val, index) => {
//         const isActive = index === activeIndex;
//         const content = isActive ? (
//           <div>

//             <br />
//             {decodedHtml && (
//               <p dangerouslySetInnerHTML={{ __html: decodedHtml }} />
//             )}
//             <br />
//             <a href={val.data.url}>{val.data.url}</a>
//             <br />
//             <h1>
//               <strong>score: {value.data.score}</strong>
//             </h1>
//           </div>
//         ) : null;
//         return
//         <div key={val.data.title}>
//           <div
//              onClick={() => itemClick(index)}
//             className={`title ${isActive ? 'active' : ''}`}
//           >
//             {val.data.title}
//           </div>
//           {content}
//         </div>
//       });
//       return <div>
//       {renderedItems}
//     </div>
//     };
//   })

//   }

// </div>
// }
// import React, { useState } from "react";
// import he from "he"; // Import the 'he' library for HTML decoding

// export default function Accordion({ RedditData }) {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const itemClick = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   return (
//     <div>
//       {Reddit.data.children.map((value, index) => {
//         const selftextHtml = value.data.selftext_html;
//         const decodedHtml = selftextHtml ? he.decode(selftextHtml) : null;

//         const isActive = index === activeIndex;
//         const content = isActive ? (
//           <div>
//             <br />
//             {decodedHtml && (
//               <p
//                 className="para"
//                 dangerouslySetInnerHTML={{ __html: decodedHtml }}
//               />
//             )}
//             <br />
//             <a className="link" href={value.data.url}>
//               {value.data.url}
//             </a>
//             <br />
//             <h1 className="score">
//               <strong>score: {value.data.score}</strong>
//             </h1>
//           </div>
//         ) : null;

//         return (
//           <div key={value.data.title}>
//             <div
//               onClick={() => itemClick(index)}
//               className={`title ${isActive ? "active" : ""}`}
//             >
//               <div className="container">
//                 <h1 className="id"> id: {value.data.id}</h1>
//                 <h1 className="title">
//                   {value.data.title}
//                   <span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke-width="1.5"
//                       stroke="currentColor"
//                       class="w-6 h-6"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
//                       />
//                     </svg>
//                   </span>
//                 </h1>
               
//               </div>
//             </div>
//             {content}
//           </div>
//         );
//       })}
//     </div>
//   );
// }
