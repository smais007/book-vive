/* eslint-disable react/prop-types */
// PagesToRead

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { getStoredReadBook } from "../utils";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function PagesToRead() {
  const [pageRead] = useState(useLoaderData() || []);
  const [readPage, setReadPage] = useState([]);

  useEffect(() => {
    const storedReadPage = getStoredReadBook();
    const pageReadData = pageRead.filter((book) =>
      storedReadPage.includes(book.bookId)
    );

    const charData = pageReadData.map((page) => ({
      name: page.bookName,
      uv: page.totalPages,
    }));
    setReadPage(charData);
  }, [pageRead]);
  return (
    <ResponsiveContainer style={{width: '100%'}}>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <BarChart
          className="w-full"
          width={600}
          height={500}
          data={readPage}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="uv"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {readPage.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </ResponsiveContainer>
  );
}
