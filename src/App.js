import { Input } from "./components/forms/input.jsx";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default function App() {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

function SearchBar() {
  return (
    <div>
      <div className="mb-3">
        <Input value="" onChange={() => null} placeholder="Rechercher" />
      </div>
    </div>
  );
}
