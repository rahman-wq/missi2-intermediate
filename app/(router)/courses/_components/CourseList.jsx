import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CourseItem from "./CourseItem";
import Link from "next/link";

function CourseList() {
  // Inisialisasi daftar kursus secara manual
  const [courseList, setCourseList] = useState([
    {
      id: 1,
      name: "Beasiswa dan Sertifikasi International",
      author: "DEVHANDAL 2024",
      banner: { url: "/img/image1.png" },
      chapter: [],
      free: true,
      slug: "beasiswa-dan-sertifikasi-international",
    },
    {
      id: 2,
      name: "Belajar Jadi Hacker",
      author: "Latihan Aplikasi, Studi Kasus Nyata, Praktek Intensif",
      banner: { url: "/img/image2.jpg" },
      chapter: [],
      free: false,
      slug: "belajar-jadi-hacker",
    },
    {
      id: 3,
      name: "Belajar Jadi Fullstack Developer",
      author: "Dengan Terarah",
      banner: { url: "/img/image3.png" },
      chapter: [],
      free: true,
      slug: "belajar-jadi-fullstack-developer",
    },
    {
      id: 4,
      name: "Jagoan PostgreSQL",
      author: "John Doe",
      banner: { url: "/img/image4.png" },
      chapter: [],
      free: true,
      slug: "jagoan-postgresql",
    },
    {
      id: 5,
      name: "Jagoan TypeScript",
      author: "Jane Smith",
      banner: { url: "/img/image5.png" },
      chapter: [{}, {}, {}], // 3 chapters
      free: false,
      slug: "jagoan-typescript",
    },
    {
      id: 6,
      name: "Jagoan Redis",
      author: "Mike Johnson",
      banner: { url: "/img/image6.png" },
      chapter: [{}, {}], // 2 chapters
      free: true,
      slug: "jagoan-redis",
    },
  ]);

  return (
    <div className="p-5 bg-white rounded-lg mt-3">
      {/* Judul dan Filter */}
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-bold text-primary">Semua Kursus</h2>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua</SelectItem>
            <SelectItem value="paid">Berbayar</SelectItem>
            <SelectItem value="free">Gratis</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Tampilkan Daftar Kursus */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {courseList?.length > 0
          ? courseList.map((item, index) => (
              <Link href={"/course-preview/" + item.slug} key={index}>
                <div>
                  <CourseItem course={item} />
                </div>
              </Link>
            ))
          : [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <div
                key={index}
                className="w-full h-[240px] rounded-xl m-2 bg-slate-200 animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default CourseList;
