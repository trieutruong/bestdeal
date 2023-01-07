import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import classNames from "classnames/bind";
import Section from "../src/components/section/Section";
import Item from "../src/components/Item/Item";
import { useEffect, useState } from "react";
import * as React from "react";
import Carousel from "../src/components/carousel/Carousel";
import Link from "next/link";
import SectionArticle from "../src/components/sectionarticle/SectionArticle";
import ArticleItem from "../src/components/sectionstore/StoreItem";
import SectionStore from "../src/components/sectionstore/SectionStore";
import Footer from "../src/components/footer/Footer";
import BackToTop from "../src/components/backtotop/BackToTop";

const cx = classNames.bind(styles);

const handtoolsMenu = [
  "DỤNG CỤ NGÀNH NƯỚC",
  "DỤNG CỤ NGÀNH ĐIỆN",
  "DỤNG CỤ XÂY DỰNG",
];

const machineMenu = ["Máy chạy điện", "Máy chạy pin", "Máy cơ"];
const consumableMenu = ["Máy chạy điện", "Máy chạy pin", "Máy cơ"];
const waterMenu = ["Thiết bị phòng tắm", "Phụ kiện ngành nước"];
const MENU_LOCKS = [
  "KHÓA PANO",
  "KHÓA TAY NẮM TRÒN",
  "KHÓA XE MÁY",
  "KHÓA XE ĐẠP",
];

interface Props {
  product: boolean | string;
  brand: boolean | string;
  handtools: boolean | string;
  handmachines: boolean | string;
  consumablesupplies: boolean | string;
  watersupplies: boolean | string;
  doorlocks: boolean | string;
  _banners: boolean | string;
  newsevents: boolean | string;
}

interface Product {}

interface Brand {}

interface HandTools {}

const Home: React.FC<Props> = ({
  product = "",
  brand = "",
  handtools = "",
  handmachines = "",
  consumablesupplies = "",
  watersupplies = "",
  doorlocks = "",
  _banners = "",
  newsevents = "",
}) => {
  const [products, setProducts] = React.useState([]);
  const [brands, setBrands] = React.useState([]);
  const [handTools, setHandTools] = React.useState([]);
  const [handMachines, setHandMachines] = React.useState([]);
  const [consumableSupplies, setConsumableSupplies] = React.useState([]);
  const [waterSupplies, setWaterSupplies] = React.useState([]);
  const [doorLocks, setDoorLocks] = useState([]);
  const [banners, setBanners] = React.useState([]);
  const [newsEvents, setNewsEvents] = React.useState([]);

  useEffect(() => {
    const callAPI = async () => {
      try {
        if (!product) {
          const res = await fetch(`http://localhost:3000/api/hotproduct`, {
            method: "GET",
          });
          const data = await res.json();
          setProducts(data);
        }
        if (!brand) {
          const res = await fetch(`http://localhost:3000/api/brand`, {
            method: "GET",
          });
          const data = await res.json();
          setBrands(data);
        }
        if (!handtools) {
          const res = await fetch(`http://localhost:3000/api/handtools`, {
            method: "GET",
          });
          const data = await res.json();
          setHandTools(data);
        }
        if (!handmachines) {
          const res = await fetch(`http://localhost:3000/api/handmachine`, {
            method: "GET",
          });
          const data = await res.json();
          setHandMachines(data);
        }
        if (!consumablesupplies) {
          const res = await fetch(
            `http://localhost:3000/api/consumablesupply`,
            {
              method: "GET",
            }
          );
          const data = await res.json();
          setConsumableSupplies(data);
        }
        if (!watersupplies) {
          const res = await fetch(`http://localhost:3000/api/watersupply`, {
            method: "GET",
          });
          const data = await res.json();
          setWaterSupplies(data);
        }
        if (!doorlocks) {
          const res = await fetch(`http://localhost:3000/api/doorlock`, {
            method: "GET",
          });
          const data = await res.json();
          setDoorLocks(data);
        }
        if (!_banners) {
          const res = await fetch(`http://localhost:3000/api/banner`, {
            method: "GET",
          });
          const data = await res.json();
          setBanners(data);
        }
        if (!newsevents) {
          const res = await fetch(`http://localhost:3000/api/newsevent`, {
            method: "GET",
          });
          const data = await res.json();
          setNewsEvents(data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    callAPI();
  }, []);

  return (
    <div className={cx("home__wrap")}>
      <div className={cx("home__content")}></div>
      <Section title="SẢN PHẨM HOT" view="XEM TẤT CẢ" mg16>
        <Carousel data={products} />
      </Section>

      <Section title="THƯƠNG HIỆU NỔI BẬT" view="XEM TẤT CẢ">
        <Carousel data={brands} />
      </Section>

      <Section title="DỤNG CỤ CẦM TAY" view="XEM THÊM" menu={handtoolsMenu}>
        {handTools.map((handtool, index) => (
          <Item data={handtool} key={index} isProduct />
        ))}
      </Section>

      <Section title="MÁY CẦM TAY" view="XEM THÊM" menu={machineMenu} reverse>
        {handMachines.map((handmachine, index) => (
          <Item data={handmachine} key={index} isProduct />
        ))}
      </Section>

      <Section title="VẬT TƯ TIÊU HAO" view="XEM THÊM">
        {consumableSupplies.map((consumableSupply, index) => (
          <Item data={consumableSupply} key={index} isProduct />
        ))}
      </Section>

      <Section
        title="VẬT TƯ NGÀNH NƯỚC"
        view="XEM THÊM"
        reverse
        menu={waterMenu}
      >
        {waterSupplies.map((waterSupply, index) => (
          <Item data={waterSupply} key={index} isProduct />
        ))}
      </Section>

      <Section title="KHÓA CỬA" view="XEM THÊM" menu={MENU_LOCKS}>
        {doorLocks.map((consumableSupply, index) => (
          <Item data={consumableSupply} key={index} isProduct />
        ))}
      </Section>

      <div className={cx("banner", "row sm-gutter")}>
        {banners.map((banner: any, index) => (
          <Link
            href={{ pathname: "/brand/", query: { name: banner.name } }}
            key={index}
            className={cx("banner-link", "col md-4")}
          >
            <Image
              src={banner.image}
              alt=""
              width="393"
              height="157"
              className={cx("img-banner")}
            />
          </Link>
        ))}
      </div>

      <SectionArticle title="TIN TỨC & SỰ KIỆN" view="XEM TẤT CẢ">
        {newsEvents.map((newsEvent, index) => (
          <ArticleItem data={newsEvent} key={index} />
        ))}
      </SectionArticle>

      <BackToTop />
    </div>
  );
};

export default Home;
