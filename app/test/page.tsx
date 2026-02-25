async function getData() {
  await new Promise(res => setTimeout(res, 3000)); // giả lập chờ 3s
  return ["A", "B", "C"];
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <h1>Data loaded</h1>
      {data.map(i => <p key={i}>{i}</p>)}
    </div>
  );
}