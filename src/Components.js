import card1 from "/card-img.jpg";
import card2 from "/card-img2.jpg";
import card3 from "/card-img3.jpg";
import icon from "/icon.jpg";
const Components = [
  {
    id: 1,
    type: "Button",
    Title: "Button 1",
    Code: `<button class="border border-purple-950 bg-purple-900 px-4 py-2 rounded-md active:border-slate-700">Text Here</button>`,
  },
  {
    id: 4,
    type: "Card",
    Title: "Card 1",
    Code: `
    <div class="bg-white max-w-sm rounded overflow-hidden shadow-lg ">
      <img class="w-full max-h-52 object-cover" src=${card1} alt="Sunset in the mountains">
      <div class="px-6 py-4">
        <div class="font-bold text-black  text-xl mb-2">Content Title</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatib us quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#space</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#astronomy</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#aesthetic</span>
      </div>
    </div>
    `,
  },
  {
    id: 3,
    type: "Text",
    Title: "Text 1",
    Code: `<h1 class="bg-gradient-to-r bg-clip-text text-transparent from-blue-500 via-purple-400 to-purple-600 text-2xl font-bold">Text Here</h1>`,
  },
  {
    id: 5,
    type: "Card",
    Title: "Text 1",
    Code: `<div class="max-w-sm  lg:max-w-[600px] lg:flex">
    <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url(${card2})" title="Galaxy">
    </div>
    <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <p class="text-sm text-gray-600 flex items-center">
          <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
          </svg>
          Members only
        </p>
        <div class="text-gray-900 font-bold text-xl mb-2">Are we alone in the universe?</div>
        <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
      </div>
      <div class="flex items-center">
        <img class="w-10 h-10 rounded-full object-cover mr-4" src=${icon} alt="Avatar of YoshiKei">
        <div class="text-sm">
          <p class="text-gray-900 leading-none">Yoshikei Fujitani</p>
          <p class="text-gray-600">Aug 18</p>
        </div>
      </div>
    </div>
  </div>`,
  },
  {
    id: 6,
    type: "Card",
    Title: "Text 1",
    Code: `<div class="wrapper bg-transparent antialiased text-gray-900">
    <div>
        
        <img src=${card3} alt=" random imgee" class="w-full object-cover object-center rounded-lg shadow-md">    
        
     <div class="relative px-4 -mt-16  ">
       <div class="bg-white p-6 rounded-lg shadow-lg">
        <div class="flex items-baseline">
          <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
            New
          </span>
          <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
        2 baths  &bull; 3 rooms
      </div>  
        </div>
        
        <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">A random Title</h4>
     
      <div class="mt-1">
        $1800
        <span class="text-gray-600 text-sm">   /wk</span>
      </div>
      <div class="mt-4">
        <span class="text-teal-600 text-md font-semibold">4/5 ratings </span>
        <span class="text-sm text-gray-600">(based on 234 ratings)</span>
      </div>  
      </div>
     </div>
      
    </div>
      </div>`,
  },
];
export default Components;
