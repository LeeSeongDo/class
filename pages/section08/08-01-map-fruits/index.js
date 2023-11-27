const FRUITS = [
  { number: 1, name: "오렌지" },
  { number: 2, name: "오렌지2" },
  { number: 3, name: "오렌지3" },
  { number: 4, name: "오렌지4" },
  { number: 5, name: "오렌지5" },
  { number: 6, name: "오렌지6" },
  { number: 7, name: "오렌지7" },
  { number: 8, name: "오렌지8" },
  { number: 9, name: "오렌지9" },
  { number: 10, name: "오렌지10" },
];

export default function MapFruitsPage() {
  return (
    <div>
      {FRUITS.map((data) => (
        <div>
          {data.number} : {data.name}
        </div>
      ))}
    </div>
  );
}
