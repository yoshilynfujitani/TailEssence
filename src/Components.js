const Components = [
  {
    id: 1,
    type: "Button",
    Title: "Button 1",
    Code: `<button class="border bg-yellow-500 px-4 py-2 rounded-md active:border-slate-700">Hello World</button>`,
  },
  {
    id: 4,
    type: "Card",
    Title: "Card 1",
    Code: ` <div class="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
    <div class="px-4 py-2">
      <h2 class="text-xl font-semibold text-gray-800">hello</h2>
      <p class="mt-2 text-gray-600">content</p>
    </div>
  </div>`,
  },
  {
    id: 3,
    type: "Text",
    Title: "Text 1",
    Code: `<h1 class="bg-gradient-to-r bg-clip-text text-transparent from-blue-500 via-purple-400 to-purple-600 text-2xl font-bold">Text Here</h1>`,
  },
];
export default Components;
