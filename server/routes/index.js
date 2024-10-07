var express = require("express");
var router = express.Router();
var connection = require("../db/sql");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* 获取搜索结果 */
router.get("/goods/list", function (req, res, next) {
  // 拿到用户查询参数，
  // console.log("req: ", req);
  // 用关键字查询

  const searchText = req.query.q;
  connection.query(
    "SELECT * FROM good_list WHERE title LIKE ?",
    ["%" + searchText + "%"],
    function (error, results) {
      if (error) {
        console.error("Database query error: ", error);
        return res.status(500).send({
          code: 0,
          message: "服务器内部错误",
        });
      }

      res.send({
        code: 200,
        data: {
          list: results,
        },
      });
    }
  );
});

// 首页数据
router.get("/home/category", function (req, res, next) {
  res.send({
    code: 200,
    data: {
      list: [
        {
          _system_record_entry_id: "700060",
          shouqLink: "",
          link: "mgj://freemarket/girldress?title=女装&acm=3.mce.1_10_1u0ds.140653.0.xYIbnup1fRqIF.pos_885-m_700060-sd_119",
          acm: "3.mce.1_10_1u0ds.140653.0.xYIbnup1fRqIF.pos_885-m_700060-sd_119",
          title: "女装",
          titleColor: "#666666",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/210218_1ldikaae13k9be2kc2860h3l2kc5i_150x150.png",
          sort: 1,
          description: "",
          _material_end_time: 2147483647,
          h5Link: "//m.mogu.com/wall/s?q=女装",
          _material_start_time: 1619366400,
        },
        {
          title: "女鞋",
          h5Link: "//m.mogu.com/wall/s?q=女鞋",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/210218_5i98fkjblb2hkfj8e5kl2d28k0i61_150x150.png",
          sort: 2,
          shouqLink: "",
          link: "mgj://freemarket/shoes?title=女鞋&acm=3.mce.1_10_1u0du.140653.0.xYIbnup1fRqIq.pos_870-m_700061-sd_119",
          description: "",
          _material_end_time: 2147483647,
          acm: "3.mce.1_10_1u0du.140653.0.xYIbnup1fRqIq.pos_870-m_700061-sd_119",
          titleColor: "#666666",
          _material_start_time: 1619366400,
          _system_record_entry_id: "700061",
        },
        {
          link: "mgj://freemarket/jacket?title=上衣&acm=3.mce.1_10_1u0e0.140653.0.xYIbnup1fRqIG.pos_886-m_700064-sd_119",
          _material_end_time: 2147483647,
          acm: "3.mce.1_10_1u0e0.140653.0.xYIbnup1fRqIG.pos_886-m_700064-sd_119",
          h5Link: "//m.mogu.com/wall/s?q=上衣",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/210218_8dd5g7cj13beaj50d7b29da19kaah_150x150.png",
          shouqLink: "",
          description: "",
          title: "上衣",
          titleColor: "#666666",
          _material_start_time: 1619366400,
          sort: 3,
          _system_record_entry_id: "700064",
        },
        {
          _system_record_entry_id: "700066",
          _material_end_time: 2147483647,
          acm: "3.mce.1_10_1u0e4.140653.0.xYIbnup1fRqIs.pos_872-m_700066-sd_119",
          titleColor: "#666666",
          h5Link: "//m.mogu.com/wall/s?q=美妆/个护",
          _material_start_time: 1619366400,
          sort: 4,
          shouqLink: "",
          link: "mgj://freemarket/magic?title=美妆/个护&acm=3.mce.1_10_1u0e4.140653.0.xYIbnup1fRqIs.pos_872-m_700066-sd_119",
          description: "",
          title: "美妆/护肤",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/210218_1j08fek6g1559hk18edh1d4f665g8_150x150.png",
        },
        {
          description: "",
          acm: "3.mce.1_10_1u0ee.140653.0.xYIbnup1fRqIJ.pos_889-m_700071-sd_119",
          title: "裤子",
          h5Link: "//m.mogu.com/wall/s?q=裤子",
          _material_start_time: 1619366400,
          sort: 5,
          link: "mgj://freemarket/pants?title=裤子&acm=3.mce.1_10_1u0ee.140653.0.xYIbnup1fRqIJ.pos_889-m_700071-sd_119",
          titleColor: "#666666",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/210218_16dal2iaj300ce73ada65g0514jlk_151x150.png",
          _system_record_entry_id: "700071",
          shouqLink: "",
          _material_end_time: 2147483647,
        },
        {
          acm: "3.mce.1_10_1u0em.140653.0.xYIbnup1fRqIv.pos_875-m_700075-sd_119",
          titleColor: "#666666",
          h5Link: "//m.mogu.com/wall/s?q=母婴",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/210218_2h3jabl1bddj814fgc6h7hd17f7j5_150x150.png",
          sort: 6,
          link: "mgj://freemarket/baby?title=母婴&acm=3.mce.1_10_1u0em.140653.0.xYIbnup1fRqIv.pos_875-m_700075-sd_119",
          _material_end_time: 2147483647,
          title: "母婴/童装",
          _material_start_time: 1619366400,
          _system_record_entry_id: "700075",
          shouqLink: "",
          description: "",
        },
        {
          shouqLink: "",
          acm: "3.mce.1_10_1u0eo.140653.0.xYIbnup1fRqIK.pos_890-m_700076-sd_119",
          titleColor: "#666666",
          h5Link: "//m.mogu.com/wall/s?q=裙子",
          _material_start_time: 1619366400,
          _system_record_entry_id: "700076",
          sort: 7,
          link: "mgj://freemarket/dress?title=裙子&acm=3.mce.1_10_1u0eo.140653.0.xYIbnup1fRqIK.pos_890-m_700076-sd_119",
          description: "",
          _material_end_time: 2147483647,
          title: "裙子",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/210218_5jbk3iggd5cl4ei83i64ai1dk2lg4_151x150.png",
        },
        {
          _material_start_time: 1619366400,
          sort: 8,
          shouqLink: "",
          description: "",
          acm: "3.mce.1_10_1u0eu.140653.0.xYIbnup1fRqIw.pos_876-m_700079-sd_119",
          title: "男装男鞋",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/210218_7f1i0a1gk6ce231i81af29djik98k_151x150.png",
          _system_record_entry_id: "700079",
          link: "mgj://freemarket/boyfriend?title=男装&acm=3.mce.1_10_1u0eu.140653.0.xYIbnup1fRqIw.pos_876-m_700079-sd_119",
          _material_end_time: 2147483647,
          titleColor: "#666666",
          h5Link: "//m.mogu.com/wall/s?q=男装",
        },
        {
          titleColor: "#666666",
          sort: 9,
          _system_record_entry_id: "700081",
          link: "mgj://freemarket/suite?title=套装&acm=3.mce.1_10_1u0ey.140653.0.xYIbnup1fRqIM.pos_892-m_700081-sd_119",
          description: "",
          acm: "3.mce.1_10_1u0ey.140653.0.xYIbnup1fRqIM.pos_892-m_700081-sd_119",
          title: "套装",
          shouqLink: "",
          _material_end_time: 2147483647,
          h5Link: "//m.mogu.com/wall/s?q=套装",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/210218_571djje4gf3dj24cj6c24k6gl0kcl_150x150.png",
          _material_start_time: 1619366400,
        },
        {
          titleColor: "#666666",
          h5Link: "//m.mogu.com/wall/s?q=配饰",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/210218_218li6d4kh7hkdg73ake9b15da77i_150x150.png",
          _material_start_time: 1619366400,
          _system_record_entry_id: "700086",
          link: "mgj://freemarket/accessories?title=配饰&acm=3.mce.1_10_1u0f8.140653.0.xYIbnup1fRqIz.pos_879-m_700086-sd_119",
          _material_end_time: 2147483647,
          acm: "3.mce.1_10_1u0f8.140653.0.xYIbnup1fRqIz.pos_879-m_700086-sd_119",
          shouqLink: "",
          description: "",
          title: "配饰",
          sort: 10,
        },
        {
          title: "内衣",
          titleColor: "#666666",
          sort: 11,
          link: "mgj://freemarket/underwear?title=内衣&acm=3.mce.1_10_1u0fa.140653.0.xYIbnup1fRqIO.pos_894-m_700087-sd_119",
          description: "",
          _material_end_time: 2147483647,
          acm: "3.mce.1_10_1u0fa.140653.0.xYIbnup1fRqIO.pos_894-m_700087-sd_119",
          h5Link: "//m.mogu.com/wall/s?q=内衣",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/210218_6i5gdg03b8f2l4a342bl0c337i6d8_150x150.png",
          _material_start_time: 1619366400,
          _system_record_entry_id: "700087",
          shouqLink: "",
        },
        {
          title: "包包",
          h5Link: "//m.mogu.com/wall/s?q=包包",
          sort: 12,
          _system_record_entry_id: "700092",
          link: "mgj://freemarket/bags?title=包包&acm=3.mce.1_10_1u0fk.140653.0.xYIbnup1fRqIB.pos_881-m_700092-sd_119",
          description: "",
          _material_end_time: 2147483647,
          acm: "3.mce.1_10_1u0fk.140653.0.xYIbnup1fRqIB.pos_881-m_700092-sd_119",
          shouqLink: "",
          titleColor: "#666666",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/210218_7gg9cai9b71dh11ggeb8gj840ahd5_150x150.png",
          _material_start_time: 1619366400,
        },
        {
          description: "",
          _material_end_time: 2147483647,
          acm: "3.mce.1_10_1u0fo.140653.0.xYIbnup1fRqIR.pos_897-m_700094-sd_119",
          title: "家居",
          titleColor: "#666666",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/210218_130lgbae573k7ldlbll1djl6fc6d9_150x150.png",
          _system_record_entry_id: "700094",
          shouqLink: "",
          link: "mgj://freemarket/decorate?title=家居&acm=3.mce.1_10_1u0fo.140653.0.xYIbnup1fRqIR.pos_897-m_700094-sd_119",
          h5Link: "//m.mogu.com/wall/book/household?fcid=50526&title=家居百货",
          _material_start_time: 1619366400,
          sort: 13,
        },
        {
          acm: "3.mce.1_10_1u0fw.140653.0.xYIbnup1fRqID.pos_883-m_700098-sd_119",
          titleColor: "#666666",
          shouqLink: "",
          link: "mgj://freemarket/life?title=食品&acm=3.mce.1_10_1u0fw.140653.0.xYIbnup1fRqID.pos_883-m_700098-sd_119",
          _material_end_time: 2147483647,
          title: "食品",
          h5Link: "//m.mogu.com/wall/s?q=食品",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/210218_79i86gglj49bl6h9gihhl2kjgf2ae_150x150.png",
          _material_start_time: 1619366400,
          sort: 15,
          _system_record_entry_id: "700098",
          description: "",
        },
      ],
    },
  });
});

router.get("/home/goods", function (req, res, next) {
  res.send({
    code: 200,
    data: {
      list: [
        {
          lefttop_taglist: [
            {
              w: 132,
              h: 108,
              sort: "3",
              pagani_system_tagType: "newActTag",
              styleType: 1,
              img: "https://s11.mogucdn.com/mlcdn/c45406/221123_3kk6513eiaib7b6i2g26jehee4dcj_132x108.png",
            },
          ],
          leftbottom_taglist: [],
          liveLink:
            "https://h5.mogu.com/live-mona/live.html?actorId=11no1nk&actorUserId=11no1nk&roomId=12434361&itemId=1n3lul0&acm=3.mce.1_4_1n3lul0.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3n-sv_1resqei7k9p0-src_1-pri_9_11no1nk-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1et0ve-lc_201-x_11no1nk-sn_1321fg-pm_356",
          orgPrice: 8800,
          clientUrl:
            "https://h5.mogu.com/detail-normal/index.html?itemId=1n3lul0&acm=3.mce.1_4_1n3lul0.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3n-sv_1resqei7k9p0-src_1-pri_9_11no1nk-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1et0ve-lc_201-x_11no1nk-sn_1321fg-pm_356",
          liveId: 12434361,
          itemId: 698390126,
          actorId: 50109588,
          explainItemType: 3,
          discountPrice: "¥9.9",
          acm: "3.mce.1_4_1n3lul0.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3n-sv_1resqei7k9p0-src_1-pri_9_11no1nk-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1et0ve-lc_201-x_11no1nk-sn_1321fg-pm_356",
          bottomIcon:
            "https://s10.mogucdn.com/mlcdn/c45406/200928_043cgf54cjia5d88gfj5j626id541_66x36.png",
          subtitle:
            "https://s10.mogucdn.com/mlcdn/bb4b01/220330_51eagkl3laff0c1k0f1673h603i11.srt",
          actorIdUrl: "11no1nk",
          itemType: 65,
          type: 101,
          firstFrame:
            "https://1251964405.vod2.myqcloud.com/vodtranscq1251964405/387702298399493058/snapshotByTimeOffset/snapshotByTimeOffset_10_0.jpg",
          bar_taglist: [],
          sale: "销量6170",
          actorName: "小甜心_呢",
          isSecKillItem: 0,
          liveStatus: 3,
          pcLink:
            "https://pc.mogu.com/content/live-slice/index.html?itemId=1n3lul0&actorId=11no1nk&acm=3.mce.1_4_1n3lul0.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3n-sv_1resqei7k9p0-src_1-pri_9_11no1nk-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1et0ve-lc_201-x_11no1nk-sn_1321fg-pm_356",
          actorAvatar:
            "https://s10.mogucdn.com/mlcdn/c45406/200405_8fc8l22aifb9l60lj832galii1d57_400x400.jpg",
          videoUrl:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/387702298399493058/v.f313648.mp4!X387702298399493058.mp4",
          showDiscountPrice: "9.90",
          actorTag: "小个子福音",
          imageAdapt: true,
          itemIdUrl: "1n3lul0",
          itemMarks: "1019 1965 1091 1733 733 1088 800",
          id: "50109588698390126",
          useVideoUrl: false,
          explainId: 2566978,
          similarityUrl:
            "https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n3lul0&acm=3.mce.1_4_1n3lul0.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3n-sv_1resqei7k9p0-src_1-pri_9_11no1nk-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1et0ve-lc_201-x_11no1nk-sn_1321fg-pm_356&itemType=65&imgSurl=/mlcdn/c45406/230422_425i2hjjb9igf56ff9g35i9g8lehl_700x694.jpg",
          videoId: 5512057,
          videoH265Url:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/387702298399493058/v.f985010.mp4!X387702298399493058.mp4",
          hasSimilarity: true,
          showOrgPrice: "88.00",
          promotion_taglist: [],
          itemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/230422_425i2hjjb9igf56ff9g35i9g8lehl_700x694.jpg",
          link: "https://h5.mogu.com/live-goods-explain/goods-explain.html?itemId=1n3lul0&actorId=11no1nk&source=homepage_useItemId&dependOnSideList=0&dataSource=default&sideDataSource=actorSale&acm=3.mce.1_4_1n3lul0.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3n-sv_1resqei7k9p0-src_1-pri_9_11no1nk-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1et0ve-lc_201-x_11no1nk-sn_1321fg-pm_356",
          title: "甜美各式小夹子刘海小发夹",
          originItemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/230422_425i2hjjb9igf56ff9g35i9g8lehl_700x694.jpg",
        },
        {
          clientUrl:
            "https://h5.mogu.com/detail-normal/index.html?itemId=1n3oyxm&acm=3.mce.1_4_1n3oyxm.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3o-sv_15u0h53t6axga-src_1-pri_9_1cp5ifq-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1enwlg-lc_201-x_1cp5ifq-sn_134bxi-pm_356",
          itemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/220412_0k2iklhc7djh3d5l048gd641daf7c_640x960.jpg",
          actorAvatar:
            "https://s10.mogucdn.com/mlcdn/c45406/200625_38c861ghafjg21a6jgh6jal2ih4ge_400x400.jpg",
          hasSimilarity: true,
          lefttop_taglist: [
            {
              h: 108,
              sort: "3",
              pagani_system_tagType: "newActTag",
              styleType: 1,
              img: "https://s11.mogucdn.com/mlcdn/c45406/221123_3kk6513eiaib7b6i2g26jehee4dcj_132x108.png",
              w: 132,
            },
          ],
          id: "383920815698462929",
          liveStatus: 3,
          useVideoUrl: false,
          explainId: 2620439,
          type: 101,
          originItemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/220412_0k2iklhc7djh3d5l048gd641daf7c_640x960.jpg",
          videoUrl:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/387702300132728781/v.f313648.mp4!X387702300132728781.mp4",
          showOrgPrice: "29.00",
          itemIdUrl: "1n3oyxm",
          sale: "销量7109",
          actorId: 383920815,
          subtitle:
            "https://s10.mogucdn.com/mlcdn/bb4b01/220502_5d3ik9j13f086d4deeb5i0813h32a.srt",
          explainItemType: 3,
          acm: "3.mce.1_4_1n3oyxm.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3o-sv_15u0h53t6axga-src_1-pri_9_1cp5ifq-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1enwlg-lc_201-x_1cp5ifq-sn_134bxi-pm_356",
          videoId: 5587848,
          title: "拍6免3~女士防滑五指前掌垫",
          leftbottom_taglist: [],
          pcLink:
            "https://pc.mogu.com/content/live-slice/index.html?itemId=1n3oyxm&actorId=1cp5ifq&acm=3.mce.1_4_1n3oyxm.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3o-sv_15u0h53t6axga-src_1-pri_9_1cp5ifq-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1enwlg-lc_201-x_1cp5ifq-sn_134bxi-pm_356",
          videoH265Url:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/387702300132728781/v.f985010.mp4!X387702300132728781.mp4",
          orgPrice: 2900,
          isSecKillItem: 0,
          firstFrame:
            "https://1251964405.vod2.myqcloud.com/vodtranscq1251964405/387702300132728781/snapshotByTimeOffset/snapshotByTimeOffset_10_0.jpg",
          bar_taglist: [],
          liveLink:
            "https://h5.mogu.com/live-mona/live.html?actorId=1cp5ifq&actorUserId=1cp5ifq&roomId=12314950&itemId=1n3oyxm&acm=3.mce.1_4_1n3oyxm.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3o-sv_15u0h53t6axga-src_1-pri_9_1cp5ifq-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1enwlg-lc_201-x_1cp5ifq-sn_134bxi-pm_356",
          actorTag: "搭配不重样",
          discountPrice: "¥5.97",
          similarityUrl:
            "https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n3oyxm&acm=3.mce.1_4_1n3oyxm.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3o-sv_15u0h53t6axga-src_1-pri_9_1cp5ifq-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1enwlg-lc_201-x_1cp5ifq-sn_134bxi-pm_356&itemType=65&imgSurl=/mlcdn/c45406/220412_0k2iklhc7djh3d5l048gd641daf7c_640x960.jpg",
          actorIdUrl: "1cp5ifq",
          itemType: 65,
          promotion_taglist: [
            {
              color: "#ff4466",
              pagani_system_tagType: "shopLevelTag",
              fmColor: "#ff4466",
              content: "满6件免3",
            },
          ],
          showDiscountPrice: "5.97",
          itemMarks: "1965 1019 1091 1733 733 800 1088",
          bottomIcon:
            "https://s10.mogucdn.com/mlcdn/c45406/200928_043cgf54cjia5d88gfj5j626id541_66x36.png",
          link: "https://h5.mogu.com/live-goods-explain/goods-explain.html?itemId=1n3oyxm&actorId=1cp5ifq&source=homepage_useItemId&dependOnSideList=0&dataSource=default&sideDataSource=actorSale&acm=3.mce.1_4_1n3oyxm.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3o-sv_15u0h53t6axga-src_1-pri_9_1cp5ifq-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1enwlg-lc_201-x_1cp5ifq-sn_134bxi-pm_356",
          actorName: "冉冉Rran",
          imageAdapt: true,
          liveId: 12314950,
          itemId: 698462929,
        },
        {
          bottomIcon:
            "https://s10.mogucdn.com/mlcdn/c45406/200928_043cgf54cjia5d88gfj5j626id541_66x36.png",
          actorIdUrl: "1estl6s",
          discountPrice: "¥159",
          type: 101,
          showDiscountPrice: "159.00",
          actorId: 447468070,
          sale: "销量492",
          actorTag: "",
          similarityUrl:
            "https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n736bs&acm=3.mce.1_4_1n736bs.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3p-sv_16srwdvo8oyq0-src_1-pri_9_1estl6s-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evx0s-lc_201-x_1estl6s-sn_140ay0-pm_327&itemType=65&imgSurl=/mlcdn/c45406/240903_6ka0jal208i82fiki9g57j7lb8hda_978x591.jpg",
          actorName: "颜奇奇GiGi",
          originItemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240903_6ka0jal208i82fiki9g57j7lb8hda_978x591.jpg",
          id: "447468070701313736",
          liveId: 12501850,
          pcLink:
            "https://pc.mogu.com/content/live-slice/index.html?itemId=1n736bs&actorId=1estl6s&acm=3.mce.1_4_1n736bs.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3p-sv_16srwdvo8oyq0-src_1-pri_9_1estl6s-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evx0s-lc_201-x_1estl6s-sn_140ay0-pm_327",
          orgPrice: 299900,
          imageAdapt: true,
          itemIdUrl: "1n736bs",
          itemId: 701313736,
          itemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240903_6ka0jal208i82fiki9g57j7lb8hda_978x591.jpg",
          link: "https://h5.mogu.com/live-goods-explain/goods-explain.html?itemId=1n736bs&actorId=1estl6s&source=homepage_useItemId&dependOnSideList=0&dataSource=default&sideDataSource=actorSale&acm=3.mce.1_4_1n736bs.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3p-sv_16srwdvo8oyq0-src_1-pri_9_1estl6s-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evx0s-lc_201-x_1estl6s-sn_140ay0-pm_327",
          leftbottom_taglist: [],
          liveStatus: 3,
          showOrgPrice: "2999.00",
          title: "【飘带皮衣】王福贵定制休闲百搭翻领皮衣外套",
          useVideoUrl: false,
          liveLink:
            "https://h5.mogu.com/live-mona/live.html?actorId=1estl6s&actorUserId=1estl6s&roomId=12501850&itemId=1n736bs&acm=3.mce.1_4_1n736bs.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3p-sv_16srwdvo8oyq0-src_1-pri_9_1estl6s-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evx0s-lc_201-x_1estl6s-sn_140ay0-pm_327",
          explainId: 3366296,
          bar_taglist: [],
          videoH265Url:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1397757892429865076/v.f1459082.mp4!X1397757892429865076.mp4",
          firstFrame:
            "https://1251964405.vod2.myqcloud.com/vodtranscq1251964405/1397757892429865076/snapshotByTimeOffset/snapshotByTimeOffset_10_0.jpg",
          clientUrl:
            "https://h5.mogu.com/detail-normal/index.html?itemId=1n736bs&acm=3.mce.1_4_1n736bs.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3p-sv_16srwdvo8oyq0-src_1-pri_9_1estl6s-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evx0s-lc_201-x_1estl6s-sn_140ay0-pm_327",
          promotion_taglist: [
            {
              color: "#ff4466",
              pagani_system_tagType: "shopLevelTag",
              fmColor: "#ff4466",
              content: "满1件减60",
            },
          ],
          isSecKillItem: 0,
          hasSimilarity: true,
          lefttop_taglist: [
            {
              h: 108,
              sort: "3",
              pagani_system_tagType: "newActTag",
              styleType: 1,
              img: "https://s11.mogucdn.com/mlcdn/c45406/221123_3kk6513eiaib7b6i2g26jehee4dcj_132x108.png",
              w: 132,
            },
          ],
          itemMarks: "1091 1019 1965 1854 1733 733 800 1088",
          videoUrl:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1397757892429865076/v.f1459083.mp4!X1397757892429865076.mp4",
          subtitle:
            "https://s10.mogucdn.com/mlcdn/bb4b01/240905_7he037llch898726jee5932c9c315.srt",
          actorAvatar:
            "https://s10.mogucdn.com/mlcdn/c45406/211214_0160hhk091d1lalg63ad9ce81bj43_400x400.jpg",
          explainItemType: 3,
          itemType: 65,
          acm: "3.mce.1_4_1n736bs.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3p-sv_16srwdvo8oyq0-src_1-pri_9_1estl6s-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evx0s-lc_201-x_1estl6s-sn_140ay0-pm_327",
          videoId: 6648220,
        },
        {
          itemType: 65,
          liveStatus: 3,
          showOrgPrice: "999.00",
          itemId: 701351223,
          actorAvatar:
            "https://s10.mogucdn.com/mlcdn/c45406/220324_09hilik743flcb02d12e35f13f9l7_400x400.jpg",
          actorName: "叶子yzzz",
          title: "新款秋季短款设计感高腰宽松显瘦时尚牛仔裤1037",
          isSecKillItem: 0,
          useVideoUrl: false,
          itemMarks: "1080 1091 1965 1854 1733 733 800 2023 1000 1088 1879",
          bottomIcon:
            "https://s10.mogucdn.com/mlcdn/c45406/200928_043cgf54cjia5d88gfj5j626id541_66x36.png",
          discountPrice: "¥59.9",
          type: 101,
          orgPrice: 99900,
          id: "246242581701351223",
          sale: "销量534",
          pcLink:
            "https://pc.mogu.com/content/live-slice/index.html?itemId=1n74s6e&actorId=1857o0y&acm=3.mce.1_4_1n74s6e.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3q-sv_13qp7f4q3v3ja-src_1-pri_9_1857o0y-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evxms-lc_201-x_1857o0y-sn_140t5q-pm_327",
          acm: "3.mce.1_4_1n74s6e.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3q-sv_13qp7f4q3v3ja-src_1-pri_9_1857o0y-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evxms-lc_201-x_1857o0y-sn_140t5q-pm_327",
          videoUrl:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1397757893489115853/v.f1459083.mp4!X1397757893489115853.mp4",
          firstFrame:
            "https://1251964405.vod2.myqcloud.com/vodtranscq1251964405/1397757893489115853/snapshotByTimeOffset/snapshotByTimeOffset_10_0.jpg",
          bar_taglist: [],
          itemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240919_0dc08a7l378h7hjd41ak39g6hd371_900x1200.jpg",
          liveLink:
            "https://h5.mogu.com/live-mona/live.html?actorId=1857o0y&actorUserId=1857o0y&roomId=12502246&itemId=1n74s6e&acm=3.mce.1_4_1n74s6e.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3q-sv_13qp7f4q3v3ja-src_1-pri_9_1857o0y-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evxms-lc_201-x_1857o0y-sn_140t5q-pm_327",
          actorIdUrl: "1857o0y",
          videoId: 6663243,
          leftbottom_taglist: [],
          itemIdUrl: "1n74s6e",
          videoH265Url:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1397757893489115853/v.f1459082.mp4!X1397757893489115853.mp4",
          promotion_taglist: [],
          showDiscountPrice: "59.90",
          liveId: 12502246,
          actorId: 246242581,
          hasSimilarity: true,
          originItemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240919_0dc08a7l378h7hjd41ak39g6hd371_900x1200.jpg",
          subtitle:
            "https://s10.mogucdn.com/mlcdn/bb4b01/240919_4kaa3i3834dee62674a2lk6fd2aib.srt",
          explainItemType: 3,
          link: "https://h5.mogu.com/live-goods-explain/goods-explain.html?itemId=1n74s6e&actorId=1857o0y&source=homepage_useItemId&dependOnSideList=0&dataSource=default&sideDataSource=actorSale&acm=3.mce.1_4_1n74s6e.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3q-sv_13qp7f4q3v3ja-src_1-pri_9_1857o0y-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evxms-lc_201-x_1857o0y-sn_140t5q-pm_327",
          lefttop_taglist: [
            {
              styleType: 1,
              img: "https://s11.mogucdn.com/mlcdn/c45406/221123_3kk6513eiaib7b6i2g26jehee4dcj_132x108.png",
              w: 132,
              h: 108,
              sort: "3",
              pagani_system_tagType: "newActTag",
            },
          ],
          imageAdapt: true,
          clientUrl:
            "https://h5.mogu.com/detail-normal/index.html?itemId=1n74s6e&acm=3.mce.1_4_1n74s6e.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3q-sv_13qp7f4q3v3ja-src_1-pri_9_1857o0y-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evxms-lc_201-x_1857o0y-sn_140t5q-pm_327",
          explainId: 3378099,
          actorTag: "新款女王",
          similarityUrl:
            "https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n74s6e&acm=3.mce.1_4_1n74s6e.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3q-sv_13qp7f4q3v3ja-src_1-pri_9_1857o0y-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evxms-lc_201-x_1857o0y-sn_140t5q-pm_327&itemType=65&imgSurl=/mlcdn/c45406/240919_0dc08a7l378h7hjd41ak39g6hd371_900x1200.jpg",
        },
        {
          discountPrice: "¥6.9",
          videoUrl:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/387702303521314743/v.f313648.mp4!X387702303521314743.mp4",
          leftbottom_taglist: [],
          itemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/220717_4b9886ff8h8f4ga0576h98l2i8bki_800x800.jpg",
          bottomIcon:
            "https://s10.mogucdn.com/mlcdn/c45406/200928_043cgf54cjia5d88gfj5j626id541_66x36.png",
          similarityUrl:
            "https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n48xh6&acm=3.mce.1_4_1n48xh6.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3r-sv_138ph9xo1qut6-src_1-pri_9_1721pi2-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1eofki-lc_201-x_1721pi2-sn_139mlm-pm_356&itemType=65&imgSurl=/mlcdn/c45406/220717_4b9886ff8h8f4ga0576h98l2i8bki_800x800.jpg",
          liveStatus: 3,
          itemType: 65,
          actorName: "潘仲晴呀",
          hasSimilarity: true,
          lefttop_taglist: [
            {
              img: "https://s11.mogucdn.com/mlcdn/c45406/221123_3kk6513eiaib7b6i2g26jehee4dcj_132x108.png",
              w: 132,
              h: 108,
              sort: "3",
              pagani_system_tagType: "newActTag",
              styleType: 1,
            },
          ],
          firstFrame:
            "https://1251964405.vod2.myqcloud.com/vodtranscq1251964405/387702303521314743/snapshotByTimeOffset/snapshotByTimeOffset_10_0.jpg",
          subtitle:
            "https://s10.mogucdn.com/mlcdn/bb4b01/220719_2kac4b4klik4faf233lii58aj06el.srt",
          useVideoUrl: false,
          promotion_taglist: [],
          itemMarks: "1965 1019 1091 1733 7200 733 800 1088",
          actorId: 213351057,
          explainId: 2743993,
          itemId: 698928545,
          explainItemType: 3,
          acm: "3.mce.1_4_1n48xh6.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3r-sv_138ph9xo1qut6-src_1-pri_9_1721pi2-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1eofki-lc_201-x_1721pi2-sn_139mlm-pm_356",
          type: 101,
          videoH265Url:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/387702303521314743/v.f985010.mp4!X387702303521314743.mp4",
          orgPrice: 1690,
          itemIdUrl: "1n48xh6",
          actorTag: "独一家定制",
          actorIdUrl: "1721pi2",
          title: "ins冷淡风戒指女小众设计感组合套戒甜酷简约开口个性关节指环",
          isSecKillItem: 0,
          clientUrl:
            "https://h5.mogu.com/detail-normal/index.html?itemId=1n48xh6&acm=3.mce.1_4_1n48xh6.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3r-sv_138ph9xo1qut6-src_1-pri_9_1721pi2-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1eofki-lc_201-x_1721pi2-sn_139mlm-pm_356",
          bar_taglist: [],
          liveId: 12327245,
          videoId: 5762504,
          originItemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/220717_4b9886ff8h8f4ga0576h98l2i8bki_800x800.jpg",
          imageAdapt: true,
          id: "213351057698928545",
          sale: "销量639",
          actorAvatar:
            "https://s10.mogucdn.com/mlcdn/c45406/200213_4laajhb0kde64bhbaa8kdclabf5f9_400x400.jpg",
          link: "https://h5.mogu.com/live-goods-explain/goods-explain.html?itemId=1n48xh6&actorId=1721pi2&source=homepage_useItemId&dependOnSideList=0&dataSource=default&sideDataSource=actorSale&acm=3.mce.1_4_1n48xh6.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3r-sv_138ph9xo1qut6-src_1-pri_9_1721pi2-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1eofki-lc_201-x_1721pi2-sn_139mlm-pm_356",
          showOrgPrice: "16.90",
          showDiscountPrice: "6.90",
          liveLink:
            "https://h5.mogu.com/live-mona/live.html?actorId=1721pi2&actorUserId=1721pi2&roomId=12327245&itemId=1n48xh6&acm=3.mce.1_4_1n48xh6.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3r-sv_138ph9xo1qut6-src_1-pri_9_1721pi2-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1eofki-lc_201-x_1721pi2-sn_139mlm-pm_356",
          pcLink:
            "https://pc.mogu.com/content/live-slice/index.html?itemId=1n48xh6&actorId=1721pi2&acm=3.mce.1_4_1n48xh6.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3r-sv_138ph9xo1qut6-src_1-pri_9_1721pi2-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1eofki-lc_201-x_1721pi2-sn_139mlm-pm_356",
        },
        {
          liveLink:
            "https://h5.mogu.com/live-mona/live.html?actorId=1aencmw&actorUserId=1aencmw&roomId=12403251&itemId=1mzg10e&acm=3.mce.1_4_1mzg10e.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3s-sv_14s403uoeyplq-src_1-pri_9_1aencmw-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1erov2-lc_201-x_1aencmw-sn_121q72-pm_356",
          videoH265Url: "",
          originItemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/210407_74c4d94l22jbch142ejf6jg4i4ke1_750x800.jpg",
          explainId: 1719891,
          type: 101,
          lefttop_taglist: [
            {
              w: 132,
              h: 108,
              sort: "3",
              pagani_system_tagType: "newActTag",
              styleType: 1,
              img: "https://s11.mogucdn.com/mlcdn/c45406/221123_3kk6513eiaib7b6i2g26jehee4dcj_132x108.png",
            },
          ],
          id: "314632896694895091",
          clientUrl:
            "https://h5.mogu.com/detail-normal/index.html?itemId=1mzg10e&acm=3.mce.1_4_1mzg10e.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3s-sv_14s403uoeyplq-src_1-pri_9_1aencmw-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1erov2-lc_201-x_1aencmw-sn_121q72-pm_356",
          bar_taglist: [],
          liveId: 12403251,
          explainItemType: 3,
          orgPrice: 9900,
          hasSimilarity: true,
          itemId: 694895091,
          actorTag: "甜美源头货",
          pcLink:
            "https://pc.mogu.com/content/live-slice/index.html?itemId=1mzg10e&actorId=1aencmw&acm=3.mce.1_4_1mzg10e.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3s-sv_14s403uoeyplq-src_1-pri_9_1aencmw-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1erov2-lc_201-x_1aencmw-sn_121q72-pm_356",
          leftbottom_taglist: [],
          link: "https://h5.mogu.com/live-goods-explain/goods-explain.html?itemId=1mzg10e&actorId=1aencmw&source=homepage_useItemId&dependOnSideList=0&dataSource=default&sideDataSource=actorSale&acm=3.mce.1_4_1mzg10e.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3s-sv_14s403uoeyplq-src_1-pri_9_1aencmw-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1erov2-lc_201-x_1aencmw-sn_121q72-pm_356",
          actorName: "小月月_呀",
          isSecKillItem: 0,
          liveStatus: 3,
          promotion_taglist: [],
          itemMarks: "1091 1965 1019 1733 19992 733 1088 800",
          actorId: 314632896,
          itemType: 65,
          discountPrice: "¥9.9",
          acm: "3.mce.1_4_1mzg10e.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3s-sv_14s403uoeyplq-src_1-pri_9_1aencmw-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1erov2-lc_201-x_1aencmw-sn_121q72-pm_356",
          showOrgPrice: "99.00",
          useVideoUrl: false,
          videoId: 4334008,
          videoUrl:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/5285890816786156502/v.f313648.mp4!X5285890816786156502.mp4",
          firstFrame:
            "https://1251964405.vod2.myqcloud.com/vodtranscq1251964405/5285890816786156502/snapshotByTimeOffset/snapshotByTimeOffset_10_0.jpg",
          sale: "销量4.9万",
          similarityUrl:
            "https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1mzg10e&acm=3.mce.1_4_1mzg10e.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3s-sv_14s403uoeyplq-src_1-pri_9_1aencmw-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1erov2-lc_201-x_1aencmw-sn_121q72-pm_356&itemType=65&imgSurl=/mlcdn/c45406/210407_74c4d94l22jbch142ejf6jg4i4ke1_750x800.jpg",
          actorAvatar:
            "https://s10.mogucdn.com/mlcdn/c45406/200405_6f3cca5k278c50fk2gfeg2bkj6ci9_400x400.jpg",
          imageAdapt: true,
          itemIdUrl: "1mzg10e",
          showDiscountPrice: "9.90",
          subtitle:
            "https://s10.mogucdn.com/mlcdn/bb4b01/210411_455e21e8h01igegg2g0382bc94e3j.srt",
          actorIdUrl: "1aencmw",
          title: "拍1发5 颜色备注 防晒手套女防紫外线薄冰袖",
          itemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/210407_74c4d94l22jbch142ejf6jg4i4ke1_750x800.jpg",
          bottomIcon:
            "https://s10.mogucdn.com/mlcdn/c45406/200928_043cgf54cjia5d88gfj5j626id541_66x36.png",
        },
        {
          similarityUrl:
            "https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n6mpt2&acm=3.mce.1_4_1n6mpt2.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3t-sv_14gh00dnnj7za-src_1-pri_9_19pb9ua-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1euroc-lc_201-x_19pb9ua-sn_13uhpg-pm_356&itemType=65&imgSurl=/mlcdn/c45406/240329_2eag572bhcg79594iga0if8gcf2ib_800x885.jpg",
          hasSimilarity: true,
          leftbottom_taglist: [],
          useVideoUrl: false,
          showDiscountPrice: "9.90",
          itemMarks: "1965 1019 1091 1733 7200 733 1088 800",
          bottomIcon:
            "https://s10.mogucdn.com/mlcdn/c45406/200928_043cgf54cjia5d88gfj5j626id541_66x36.png",
          actorTag: "小个子穿搭",
          subtitle:
            "https://s10.mogucdn.com/mlcdn/bb4b01/240403_329d6kgd5jaj6lh9j9ac6if2j773a.srt",
          explainItemType: 3,
          originItemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240329_2eag572bhcg79594iga0if8gcf2ib_800x885.jpg",
          lefttop_taglist: [
            {
              styleType: 1,
              img: "https://s11.mogucdn.com/mlcdn/c45406/221123_3kk6513eiaib7b6i2g26jehee4dcj_132x108.png",
              w: 132,
              h: 108,
              sort: "3",
              pagani_system_tagType: "newActTag",
            },
          ],
          videoUrl:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1397757888291617013/v.f1459083.mp4!X1397757888291617013.mp4",
          firstFrame:
            "https://1251964405.vod2.myqcloud.com/vodtranscq1251964405/1397757888291617013/snapshotByTimeOffset/snapshotByTimeOffset_10_0.jpg",
          liveStatus: 3,
          itemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240329_2eag572bhcg79594iga0if8gcf2ib_800x885.jpg",
          liveLink:
            "https://h5.mogu.com/live-mona/live.html?actorId=19pb9ua&actorUserId=19pb9ua&roomId=12475058&itemId=1n6mpt2&acm=3.mce.1_4_1n6mpt2.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3t-sv_14gh00dnnj7za-src_1-pri_9_19pb9ua-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1euroc-lc_201-x_19pb9ua-sn_13uhpg-pm_356",
          actorAvatar:
            "https://s10.mogucdn.com/mlcdn/c45406/200623_09id7e4617dc348e8jhh2d7cah2lc_400x400.jpg",
          itemType: 65,
          actorName: "LuLu_林",
          title: "WJ新中式木质古风高级感流苏发簪女盘发簪子国风10001",
          promotion_taglist: [],
          acm: "3.mce.1_4_1n6mpt2.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3t-sv_14gh00dnnj7za-src_1-pri_9_19pb9ua-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1euroc-lc_201-x_19pb9ua-sn_13uhpg-pm_356",
          id: "293355949700929783",
          itemIdUrl: "1n6mpt2",
          itemId: 700929783,
          actorId: 293355949,
          type: 101,
          showOrgPrice: "88.00",
          bar_taglist: [],
          actorIdUrl: "19pb9ua",
          isSecKillItem: 0,
          imageAdapt: true,
          explainId: 3230710,
          pcLink:
            "https://pc.mogu.com/content/live-slice/index.html?itemId=1n6mpt2&actorId=19pb9ua&acm=3.mce.1_4_1n6mpt2.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3t-sv_14gh00dnnj7za-src_1-pri_9_19pb9ua-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1euroc-lc_201-x_19pb9ua-sn_13uhpg-pm_356",
          sale: "销量63",
          link: "https://h5.mogu.com/live-goods-explain/goods-explain.html?itemId=1n6mpt2&actorId=19pb9ua&source=homepage_useItemId&dependOnSideList=0&dataSource=default&sideDataSource=actorSale&acm=3.mce.1_4_1n6mpt2.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3t-sv_14gh00dnnj7za-src_1-pri_9_19pb9ua-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1euroc-lc_201-x_19pb9ua-sn_13uhpg-pm_356",
          discountPrice: "¥9.9",
          videoId: 6472721,
          videoH265Url:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1397757888291617013/v.f1459082.mp4!X1397757888291617013.mp4",
          orgPrice: 8800,
          clientUrl:
            "https://h5.mogu.com/detail-normal/index.html?itemId=1n6mpt2&acm=3.mce.1_4_1n6mpt2.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3t-sv_14gh00dnnj7za-src_1-pri_9_19pb9ua-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1euroc-lc_201-x_19pb9ua-sn_13uhpg-pm_356",
          liveId: 12475058,
        },
        {
          pcLink:
            "https://pc.mogu.com/content/live-slice/index.html?itemId=1n5xcdk&actorId=11no1nk&acm=3.mce.1_4_1n5xcdk.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3u-sv_1resqei9vrhk-src_1-pri_9_11no1nk-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evy84-lc_201-x_11no1nk-sn_13nw5s-pm_327",
          chopHandAvatar: [
            "https://s10.mogucdn.com/b7/avatar/140904/7ps_ieyggnrrgrswknrrmmytambqhayde_640x430.jpg",
            "https://s10.mogucdn.com/p2/160923/1_336befb5g2bg4jdb3jb973g1jgh4f_392x392.jpg",
            "https://s10.mogucdn.com/b7/avatar/121018/q9dg_kqyvulsem5bhsvtwgfjeg5sckzsew_898x1370.jpg",
          ],
          discountPrice: "¥29.9",
          videoH265Url:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/5576678020695735762/v.f985010.mp4!X5576678020695735762.mp4",
          videoUrl:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/5576678020695735762/v.f313648.mp4!X5576678020695735762.mp4",
          showOrgPrice: "299.00",
          bar_taglist: [],
          itemId: 700337880,
          promotion_taglist: [],
          liveId: 12502630,
          acm: "3.mce.1_4_1n5xcdk.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3u-sv_1resqei9vrhk-src_1-pri_9_11no1nk-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evy84-lc_201-x_11no1nk-sn_13nw5s-pm_327",
          videoId: 6256389,
          title: "奶糯风V领秋冬针织内搭打底衫软糯长袖上衣 A144",
          hasSimilarity: true,
          leftbottom_taglist: [],
          id: "50109588700337880",
          sale: "销量1.2万",
          actorId: 50109588,
          bottomIcon:
            "https://s10.mogucdn.com/mlcdn/c45406/200928_043cgf54cjia5d88gfj5j626id541_66x36.png",
          orgPrice: 29900,
          isSecKillItem: 1,
          lefttop_taglist: [
            {
              w: 132,
              h: 108,
              sort: "3",
              pagani_system_tagType: "newActTag",
              styleType: 1,
              img: "https://s11.mogucdn.com/mlcdn/c45406/221123_3kk6513eiaib7b6i2g26jehee4dcj_132x108.png",
            },
          ],
          imageAdapt: true,
          useVideoUrl: false,
          originItemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/230902_1hk77hch7iecikl603i8bd8154l69_794x1059.jpg",
          chopHandCount: 31,
          firstFrame:
            "https://1251964405.vod2.myqcloud.com/vodtranscq1251964405/5576678020695735762/snapshotByTimeOffset/snapshotByTimeOffset_10_0.jpg",
          clientUrl:
            "https://h5.mogu.com/detail-normal/index.html?itemId=1n5xcdk&acm=3.mce.1_4_1n5xcdk.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3u-sv_1resqei9vrhk-src_1-pri_9_11no1nk-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evy84-lc_201-x_11no1nk-sn_13nw5s-pm_327",
          similarityUrl:
            "https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n5xcdk&acm=3.mce.1_4_1n5xcdk.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3u-sv_1resqei9vrhk-src_1-pri_9_11no1nk-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evy84-lc_201-x_11no1nk-sn_13nw5s-pm_327&itemType=65&imgSurl=/mlcdn/c45406/231227_7jf9a0dkhkgf661egidg9eg8gbalb_768x1024.jpg",
          chopHandDesc: "31人刚刚剁了手",
          itemIdUrl: "1n5xcdk",
          subtitle:
            "https://s10.mogucdn.com/mlcdn/bb4b01/230902_76c10dghhhl0e811e5985hglce2he.srt",
          actorIdUrl: "11no1nk",
          actorAvatar:
            "https://s10.mogucdn.com/mlcdn/c45406/200405_8fc8l22aifb9l60lj832galii1d57_400x400.jpg",
          explainItemType: 2,
          itemType: 65,
          leftTopImage:
            "https://s10.mogucdn.com/mlcdn/c45406/200831_5de05l0ii676cgdcgcbkaj824c2h6_141x48.png",
          itemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/231227_7jf9a0dkhkgf661egidg9eg8gbalb_768x1024.jpg",
          actorName: "小甜心_呢",
          type: 101,
          explainId: 3076780,
          liveLink:
            "https://h5.mogu.com/live-mona/live.html?actorId=11no1nk&actorUserId=11no1nk&roomId=12502630&itemId=1n5xcdk&acm=3.mce.1_4_1n5xcdk.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3u-sv_1resqei9vrhk-src_1-pri_9_11no1nk-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evy84-lc_201-x_11no1nk-sn_13nw5s-pm_327",
          link: "https://h5.mogu.com/live-goods-explain/goods-explain.html?itemId=1n5xcdk&actorId=11no1nk&source=homepage_useItemId&dependOnSideList=0&dataSource=default&sideDataSource=actorSale&acm=3.mce.1_4_1n5xcdk.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3u-sv_1resqei9vrhk-src_1-pri_9_11no1nk-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evy84-lc_201-x_11no1nk-sn_13nw5s-pm_327",
          liveStatus: 1,
          showDiscountPrice: "29.90",
          itemMarks: "1080 1019 1965 1091 1854 1733 800 1088 8080",
          actorTag: "小个子福音",
        },
        {
          itemType: 65,
          type: 101,
          imageAdapt: true,
          bar_taglist: [],
          sale: "销量8695",
          actorId: 165335161,
          discountPrice: "¥9.9",
          title: "欧美宽松夏季新款蕾丝安全裤女薄款防走光保险裤可外穿打底裤短裤",
          lefttop_taglist: [
            {
              pagani_system_tagType: "newActTag",
              styleType: 1,
              img: "https://s11.mogucdn.com/mlcdn/c45406/221123_3kk6513eiaib7b6i2g26jehee4dcj_132x108.png",
              w: 132,
              h: 108,
              sort: "3",
            },
          ],
          explainId: 2541779,
          itemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/210605_6iig7fdeb24bl945194li9ej09ic7_737x738.png",
          itemId: 698309783,
          subtitle:
            "https://s10.mogucdn.com/mlcdn/bb4b01/220317_81k4897541b49jjiic32cl64c1jf3.srt",
          similarityUrl:
            "https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n3ieli&acm=3.mce.1_4_1n3ieli.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3v-sv_12ifwuhgflobq-src_1-pri_9_15gvewa-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evuxy-lc_201-x_15gvewa-sn_130yji-pm_356&itemType=65&imgSurl=/mlcdn/c45406/210605_6iig7fdeb24bl945194li9ej09ic7_737x738.png",
          actorName: "秀秀Suliny",
          videoH265Url:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/387702297634351944/v.f985010.mp4!X387702297634351944.mp4",
          originItemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/210605_6iig7fdeb24bl945194li9ej09ic7_737x738.png",
          itemIdUrl: "1n3ieli",
          liveId: 12500503,
          actorIdUrl: "15gvewa",
          pcLink:
            "https://pc.mogu.com/content/live-slice/index.html?itemId=1n3ieli&actorId=15gvewa&acm=3.mce.1_4_1n3ieli.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3v-sv_12ifwuhgflobq-src_1-pri_9_15gvewa-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evuxy-lc_201-x_15gvewa-sn_130yji-pm_356",
          link: "https://h5.mogu.com/live-goods-explain/goods-explain.html?itemId=1n3ieli&actorId=15gvewa&source=homepage_useItemId&dependOnSideList=0&dataSource=default&sideDataSource=actorSale&acm=3.mce.1_4_1n3ieli.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3v-sv_12ifwuhgflobq-src_1-pri_9_15gvewa-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evuxy-lc_201-x_15gvewa-sn_130yji-pm_356",
          firstFrame:
            "https://1251964405.vod2.myqcloud.com/vodtranscq1251964405/387702297634351944/snapshotByTimeOffset/snapshotByTimeOffset_10_0.jpg",
          leftbottom_taglist: [],
          id: "165335161698309783",
          liveLink:
            "https://h5.mogu.com/live-mona/live.html?actorId=15gvewa&actorUserId=15gvewa&roomId=12500503&itemId=1n3ieli&acm=3.mce.1_4_1n3ieli.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3v-sv_12ifwuhgflobq-src_1-pri_9_15gvewa-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evuxy-lc_201-x_15gvewa-sn_130yji-pm_356",
          videoId: 5477642,
          clientUrl:
            "https://h5.mogu.com/detail-normal/index.html?itemId=1n3ieli&acm=3.mce.1_4_1n3ieli.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3v-sv_12ifwuhgflobq-src_1-pri_9_15gvewa-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evuxy-lc_201-x_15gvewa-sn_130yji-pm_356",
          bottomIcon:
            "https://s10.mogucdn.com/mlcdn/c45406/200928_043cgf54cjia5d88gfj5j626id541_66x36.png",
          actorTag: "甜美减龄",
          itemMarks: "1019 1965 1091 1854 1733 19992 733 1088 800 21811",
          actorAvatar:
            "https://s10.mogucdn.com/mlcdn/c45406/231124_506hb971g3l04h0hj9jlccc705f9f_400x400.jpg",
          explainItemType: 3,
          orgPrice: 6900,
          useVideoUrl: false,
          promotion_taglist: [],
          showDiscountPrice: "9.90",
          acm: "3.mce.1_4_1n3ieli.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3v-sv_12ifwuhgflobq-src_1-pri_9_15gvewa-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evuxy-lc_201-x_15gvewa-sn_130yji-pm_356",
          videoUrl:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/387702297634351944/v.f313648.mp4!X387702297634351944.mp4",
          showOrgPrice: "69.00",
          isSecKillItem: 0,
          hasSimilarity: true,
          liveStatus: 3,
        },
        {
          actorName: "冉冉Rran",
          title: "甜美拼接木耳边丝绒半身裙女8479",
          isSecKillItem: 0,
          explainItemType: 3,
          acm: "3.mce.1_4_1n74ivg.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3w-sv_15u0h53t9qhe4-src_1-pri_9_1cp5ifq-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evy0m-lc_201-x_1cp5ifq-sn_140qim-pm_327",
          lefttop_taglist: [
            {
              h: 108,
              sort: "3",
              pagani_system_tagType: "newActTag",
              styleType: 1,
              img: "https://s11.mogucdn.com/mlcdn/c45406/221123_3kk6513eiaib7b6i2g26jehee4dcj_132x108.png",
              w: 132,
            },
          ],
          itemMarks: "1019 1091 1965 1080 1854 1733 733 800 1088 1000 2023",
          bar_taglist: [],
          clientUrl:
            "https://h5.mogu.com/detail-normal/index.html?itemId=1n74ivg&acm=3.mce.1_4_1n74ivg.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3w-sv_15u0h53t9qhe4-src_1-pri_9_1cp5ifq-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evy0m-lc_201-x_1cp5ifq-sn_140qim-pm_327",
          itemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240915_210h5gh8fi701ee3cibk3bi3k834a_750x1000.jpg",
          leftbottom_taglist: [],
          id: "383920815701345194",
          similarityUrl:
            "https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n74ivg&acm=3.mce.1_4_1n74ivg.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3w-sv_15u0h53t9qhe4-src_1-pri_9_1cp5ifq-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evy0m-lc_201-x_1cp5ifq-sn_140qim-pm_327&itemType=65&imgSurl=/mlcdn/c45406/240915_210h5gh8fi701ee3cibk3bi3k834a_750x1000.jpg",
          actorAvatar:
            "https://s10.mogucdn.com/mlcdn/c45406/200625_38c861ghafjg21a6jgh6jal2ih4ge_400x400.jpg",
          discountPrice: "¥49.9",
          originItemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240915_210h5gh8fi701ee3cibk3bi3k834a_750x1000.jpg",
          imageAdapt: true,
          liveStatus: 3,
          explainId: 3376387,
          bottomIcon:
            "https://s10.mogucdn.com/mlcdn/c45406/200928_043cgf54cjia5d88gfj5j626id541_66x36.png",
          liveLink:
            "https://h5.mogu.com/live-mona/live.html?actorId=1cp5ifq&actorUserId=1cp5ifq&roomId=12502495&itemId=1n74ivg&acm=3.mce.1_4_1n74ivg.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3w-sv_15u0h53t9qhe4-src_1-pri_9_1cp5ifq-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evy0m-lc_201-x_1cp5ifq-sn_140qim-pm_327",
          pcLink:
            "https://pc.mogu.com/content/live-slice/index.html?itemId=1n74ivg&actorId=1cp5ifq&acm=3.mce.1_4_1n74ivg.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3w-sv_15u0h53t9qhe4-src_1-pri_9_1cp5ifq-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evy0m-lc_201-x_1cp5ifq-sn_140qim-pm_327",
          firstFrame:
            "https://1251964405.vod2.myqcloud.com/vodtranscq1251964405/1397757893217742102/snapshotByTimeOffset/snapshotByTimeOffset_10_0.jpg",
          liveId: 12502495,
          itemId: 701345194,
          sale: "销量182",
          subtitle:
            "https://s10.mogucdn.com/mlcdn/bb4b01/240915_3fiidedl8i0hgl036i1dib5kff043.srt",
          videoId: 6660434,
          orgPrice: 88800,
          hasSimilarity: true,
          itemIdUrl: "1n74ivg",
          promotion_taglist: [],
          showDiscountPrice: "49.90",
          actorId: 383920815,
          actorTag: "搭配不重样",
          actorIdUrl: "1cp5ifq",
          itemType: 65,
          link: "https://h5.mogu.com/live-goods-explain/goods-explain.html?itemId=1n74ivg&actorId=1cp5ifq&source=homepage_useItemId&dependOnSideList=0&dataSource=default&sideDataSource=actorSale&acm=3.mce.1_4_1n74ivg.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3w-sv_15u0h53t9qhe4-src_1-pri_9_1cp5ifq-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evy0m-lc_201-x_1cp5ifq-sn_140qim-pm_327",
          type: 101,
          videoH265Url:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1397757893217742102/v.f1459082.mp4!X1397757893217742102.mp4",
          videoUrl:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1397757893217742102/v.f1459083.mp4!X1397757893217742102.mp4",
          showOrgPrice: "888.00",
          useVideoUrl: false,
        },
        {
          title: "【浮生若梦】衬衫条纹背心裙两件套301141+301142",
          isSecKillItem: 1,
          hasSimilarity: true,
          liveStatus: 1,
          sale: "销量11",
          subtitle:
            "https://s10.mogucdn.com/mlcdn/bb4b01/240918_241kb2g24ghg81f6ejk7h6ck53f51.srt",
          liveLink:
            "https://h5.mogu.com/live-mona/live.html?actorId=1elvlo6&actorUserId=1elvlo6&roomId=12502642&itemId=1n74pls&acm=3.mce.1_4_1n74pls.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3x-sv_16pl22bmkj1cw-src_1-pri_9_1elvlo6-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evy8s-lc_201-x_1elvlo6-sn_140rhy-pm_327",
          acm: "3.mce.1_4_1n74pls.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3x-sv_16pl22bmkj1cw-src_1-pri_9_1elvlo6-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evy8s-lc_201-x_1elvlo6-sn_140rhy-pm_327",
          videoH265Url:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1397757893422694409/v.f1459082.mp4!X1397757893422694409.mp4",
          originItemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240918_409kh1dg0hke58cja6hc2ilc6kf0c_800x800.jpg",
          leftbottom_taglist: [],
          useVideoUrl: false,
          videoId: 6661897,
          promotion_taglist: [],
          itemMarks: "1080 1965 1019 1091 1854 1733 800 1088 8080",
          bottomIcon:
            "https://s10.mogucdn.com/mlcdn/c45406/200928_043cgf54cjia5d88gfj5j626id541_66x36.png",
          actorTag: "",
          pcLink:
            "https://pc.mogu.com/content/live-slice/index.html?itemId=1n74pls&actorId=1elvlo6&acm=3.mce.1_4_1n74pls.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3x-sv_16pl22bmkj1cw-src_1-pri_9_1elvlo6-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evy8s-lc_201-x_1elvlo6-sn_140rhy-pm_327",
          chopHandAvatar: [
            "https://s10.mogucdn.com/p1/160526/1_ifqwkmrzgzrdomtdhazdambqgyyde_600x600.jpg",
            "https://s10.mogucdn.com/b7/pic/141203/nihao_ieyggobqgu2wgnlfmqytambqgiyde_100x100.png",
            "https://s10.mogucdn.com/b7/pic/141120/nihao_ieydmmzuhaztandbmqytambqgyyde_100x100.png",
          ],
          link: "https://h5.mogu.com/live-goods-explain/goods-explain.html?itemId=1n74pls&actorId=1elvlo6&source=homepage_useItemId&dependOnSideList=0&dataSource=default&sideDataSource=actorSale&acm=3.mce.1_4_1n74pls.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3x-sv_16pl22bmkj1cw-src_1-pri_9_1elvlo6-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evy8s-lc_201-x_1elvlo6-sn_140rhy-pm_327",
          videoUrl:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1397757893422694409/v.f1459083.mp4!X1397757893422694409.mp4",
          firstFrame:
            "https://1251964405.vod2.myqcloud.com/vodtranscq1251964405/1397757893422694409/snapshotByTimeOffset/snapshotByTimeOffset_10_0.jpg",
          explainId: 3377023,
          actorId: 441636383,
          chopHandCount: 0,
          itemIdUrl: "1n74pls",
          showDiscountPrice: "159.00",
          itemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240918_409kh1dg0hke58cja6hc2ilc6kf0c_800x800.jpg",
          actorAvatar:
            "https://s10.mogucdn.com/mlcdn/c45406/211214_33fb209chei5ca9glkekl0f1e3e3h_400x400.jpg",
          actorIdUrl: "1elvlo6",
          itemType: 65,
          chopHandDesc: "0人刚刚剁了手",
          imageAdapt: true,
          clientUrl:
            "https://h5.mogu.com/detail-normal/index.html?itemId=1n74pls&acm=3.mce.1_4_1n74pls.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3x-sv_16pl22bmkj1cw-src_1-pri_9_1elvlo6-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evy8s-lc_201-x_1elvlo6-sn_140rhy-pm_327",
          bar_taglist: [],
          lefttop_taglist: [
            {
              w: 132,
              h: 108,
              sort: "3",
              pagani_system_tagType: "newActTag",
              styleType: 1,
              img: "https://s11.mogucdn.com/mlcdn/c45406/221123_3kk6513eiaib7b6i2g26jehee4dcj_132x108.png",
            },
          ],
          leftTopImage:
            "https://s10.mogucdn.com/mlcdn/c45406/200831_5de05l0ii676cgdcgcbkaj824c2h6_141x48.png",
          id: "441636383701349556",
          showOrgPrice: "999.00",
          liveId: 12502642,
          explainItemType: 2,
          discountPrice: "¥159",
          actorName: "左左yzzz",
          type: 101,
          orgPrice: 99900,
          itemId: 701349556,
          similarityUrl:
            "https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n74pls&acm=3.mce.1_4_1n74pls.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3x-sv_16pl22bmkj1cw-src_1-pri_9_1elvlo6-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evy8s-lc_201-x_1elvlo6-sn_140rhy-pm_327&itemType=65&imgSurl=/mlcdn/c45406/240918_409kh1dg0hke58cja6hc2ilc6kf0c_800x800.jpg",
        },
        {
          liveStatus: 1,
          bottomIcon:
            "https://s10.mogucdn.com/mlcdn/c45406/200928_043cgf54cjia5d88gfj5j626id541_66x36.png",
          similarityUrl:
            "https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n73x0i&acm=3.mce.1_4_1n73x0i.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3y-sv_12vzvt3yn1cki-src_1-pri_9_16admck-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evy9g-lc_201-x_16admck-sn_140lyg-pm_327&itemType=65&imgSurl=/mlcdn/c45406/240910_5g6k121ig54a285b8jfa4kle8fj61_804x748.jpg",
          discountPrice: "¥79.9",
          videoId: 6656574,
          type: 101,
          orgPrice: 299900,
          clientUrl:
            "https://h5.mogu.com/detail-normal/index.html?itemId=1n73x0i&acm=3.mce.1_4_1n73x0i.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3y-sv_12vzvt3yn1cki-src_1-pri_9_16admck-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evy9g-lc_201-x_16admck-sn_140lyg-pm_327",
          promotion_taglist: [],
          liveId: 12502654,
          pcLink:
            "https://pc.mogu.com/content/live-slice/index.html?itemId=1n73x0i&actorId=16admck&acm=3.mce.1_4_1n73x0i.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3y-sv_12vzvt3yn1cki-src_1-pri_9_16admck-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evy9g-lc_201-x_16admck-sn_140lyg-pm_327",
          link: "https://h5.mogu.com/live-goods-explain/goods-explain.html?itemId=1n73x0i&actorId=16admck&source=homepage_useItemId&dependOnSideList=0&dataSource=default&sideDataSource=actorSale&acm=3.mce.1_4_1n73x0i.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3y-sv_12vzvt3yn1cki-src_1-pri_9_16admck-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evy9g-lc_201-x_16admck-sn_140lyg-pm_327",
          leftTopImage:
            "https://s10.mogucdn.com/mlcdn/c45406/200831_5de05l0ii676cgdcgcbkaj824c2h6_141x48.png",
          firstFrame:
            "https://1251964405.vod2.myqcloud.com/vodtranscq1251964405/1397757892849099110/snapshotByTimeOffset/snapshotByTimeOffset_10_0.jpg",
          showDiscountPrice: "79.90",
          subtitle:
            "https://s10.mogucdn.com/mlcdn/bb4b01/240911_1ikkhi79e8ec0302lh43f1516959a.srt",
          actorIdUrl: "16admck",
          explainItemType: 2,
          title: "【加菲上衣】王福贵定制韩版小众单排扣圆领上衣衬衫",
          originItemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240910_5g6k121ig54a285b8jfa4kle8fj61_804x748.jpg",
          chopHandCount: 2,
          showOrgPrice: "2999.00",
          itemId: 701331029,
          itemType: 65,
          chopHandDesc: "2人刚刚剁了手",
          imageAdapt: true,
          bar_taglist: [],
          actorId: 190114326,
          chopHandAvatar: [
            "https://s10.mogucdn.com/b7/pic/150512/nihao_ie2dqmjqgy2tczbrgezdambqgiyde_100x100.png",
            "https://s10.mogucdn.com/p1/160728/1_ifrgmzdcmi2dgnzqmezdambqmeyde_600x600.jpg",
            "https://s10.mogucdn.com/b7/pic/151204/nihao_ie3wcnrvmy2tmmruguzdambqgayde_100x100.png",
          ],
          actorAvatar:
            "https://s10.mogucdn.com/mlcdn/c45406/200528_3a95gaicje9c9lb56accb7c49ac3j_400x400.jpg",
          lefttop_taglist: [
            {
              w: 132,
              h: 108,
              sort: "3",
              pagani_system_tagType: "newActTag",
              styleType: 1,
              img: "https://s11.mogucdn.com/mlcdn/c45406/221123_3kk6513eiaib7b6i2g26jehee4dcj_132x108.png",
            },
          ],
          useVideoUrl: false,
          explainId: 3373432,
          itemMarks: "1019 1091 1965 1854 1733 800 1088 8080",
          acm: "3.mce.1_4_1n73x0i.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3y-sv_12vzvt3yn1cki-src_1-pri_9_16admck-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evy9g-lc_201-x_16admck-sn_140lyg-pm_327",
          hasSimilarity: true,
          actorName: "DA大轩",
          videoH265Url:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1397757892849099110/v.f1459082.mp4!X1397757892849099110.mp4",
          isSecKillItem: 1,
          videoUrl:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1397757892849099110/v.f1459083.mp4!X1397757892849099110.mp4",
          leftbottom_taglist: [],
          id: "190114326701331029",
          itemIdUrl: "1n73x0i",
          itemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240910_5g6k121ig54a285b8jfa4kle8fj61_804x748.jpg",
          sale: "销量291",
          liveLink:
            "https://h5.mogu.com/live-mona/live.html?actorId=16admck&actorUserId=16admck&roomId=12502654&itemId=1n73x0i&acm=3.mce.1_4_1n73x0i.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3y-sv_12vzvt3yn1cki-src_1-pri_9_16admck-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evy9g-lc_201-x_16admck-sn_140lyg-pm_327",
          actorTag: "轻熟知性风",
        },
        {
          isSecKillItem: 1,
          firstFrame:
            "https://1251964405.vod2.myqcloud.com/vodtranscq1251964405/1397757893290228701/snapshotByTimeOffset/snapshotByTimeOffset_10_0.jpg",
          clientUrl:
            "https://h5.mogu.com/detail-normal/index.html?itemId=1n74gco&acm=3.mce.1_4_1n74gco.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3z-sv_138ph9xo4mdoo-src_1-pri_9_1721pi2-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evy9s-lc_201-x_1721pi2-sn_140qys-pm_327",
          showDiscountPrice: "49.90",
          actorId: 213351057,
          actorTag: "独一家定制",
          acm: "3.mce.1_4_1n74gco.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3z-sv_138ph9xo4mdoo-src_1-pri_9_1721pi2-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evy9s-lc_201-x_1721pi2-sn_140qys-pm_327",
          imageAdapt: true,
          leftbottom_taglist: [],
          showOrgPrice: "888.00",
          pcLink:
            "https://pc.mogu.com/content/live-slice/index.html?itemId=1n74gco&actorId=1721pi2&acm=3.mce.1_4_1n74gco.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3z-sv_138ph9xo4mdoo-src_1-pri_9_1721pi2-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evy9s-lc_201-x_1721pi2-sn_140qys-pm_327",
          chopHandAvatar: [
            "https://s10.mogucdn.com/b7/avatar/121018/q9dg_kqyvulsem5bhsvtwgfjeg5sckzsew_898x1370.jpg",
            "https://s10.mogucdn.com/b7/pic/160414/nihao_ifrwmmjrgu4teylfg4zdambqhayde_100x100.png",
            "https://s10.mogucdn.com/b7/avatar/140701/7ps_kq2hq5likrbegysugfjeg5sckzsew_827x1299.jpg",
          ],
          itemType: 65,
          hasSimilarity: true,
          id: "213351057701343560",
          itemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240914_5e0kcecfagf4bibb02i1ak6360ecc_1280x1707.jpg",
          itemId: 701343560,
          sale: "销量131",
          discountPrice: "¥49.9",
          actorName: "潘仲晴呀",
          chopHandCount: 31,
          videoUrl:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1397757893290228701/v.f1459083.mp4!X1397757893290228701.mp4",
          similarityUrl:
            "https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n74gco&acm=3.mce.1_4_1n74gco.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3z-sv_138ph9xo4mdoo-src_1-pri_9_1721pi2-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evy9s-lc_201-x_1721pi2-sn_140qys-pm_327&itemType=65&imgSurl=/mlcdn/c45406/240914_5e0kcecfagf4bibb02i1ak6360ecc_1280x1707.jpg",
          videoId: 6660944,
          itemIdUrl: "1n74gco",
          promotion_taglist: [],
          itemMarks: "1965 1091 1019 1080 1854 1733 1088 800 2023 1000 8080",
          liveId: 12502660,
          type: 101,
          lefttop_taglist: [
            {
              img: "https://s11.mogucdn.com/mlcdn/c45406/221123_3kk6513eiaib7b6i2g26jehee4dcj_132x108.png",
              w: 132,
              h: 108,
              sort: "3",
              pagani_system_tagType: "newActTag",
              styleType: 1,
            },
          ],
          useVideoUrl: false,
          explainId: 3376678,
          bottomIcon:
            "https://s10.mogucdn.com/mlcdn/c45406/200928_043cgf54cjia5d88gfj5j626id541_66x36.png",
          liveLink:
            "https://h5.mogu.com/live-mona/live.html?actorId=1721pi2&actorUserId=1721pi2&roomId=12502660&itemId=1n74gco&acm=3.mce.1_4_1n74gco.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3z-sv_138ph9xo4mdoo-src_1-pri_9_1721pi2-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evy9s-lc_201-x_1721pi2-sn_140qys-pm_327",
          actorIdUrl: "1721pi2",
          actorAvatar:
            "https://s10.mogucdn.com/mlcdn/c45406/200213_4laajhb0kde64bhbaa8kdclabf5f9_400x400.jpg",
          explainItemType: 2,
          chopHandDesc: "31人刚刚剁了手",
          leftTopImage:
            "https://s10.mogucdn.com/mlcdn/c45406/200831_5de05l0ii676cgdcgcbkaj824c2h6_141x48.png",
          liveStatus: 1,
          bar_taglist: [],
          subtitle:
            "https://s10.mogucdn.com/mlcdn/bb4b01/240916_88l6007l9l3hic0bkb9472h0944f3.srt",
          link: "https://h5.mogu.com/live-goods-explain/goods-explain.html?itemId=1n74gco&actorId=1721pi2&source=homepage_useItemId&dependOnSideList=0&dataSource=default&sideDataSource=actorSale&acm=3.mce.1_4_1n74gco.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3z-sv_138ph9xo4mdoo-src_1-pri_9_1721pi2-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evy9s-lc_201-x_1721pi2-sn_140qys-pm_327",
          title: "甜美高腰蝴蝶结针织A字半身裙",
          videoH265Url:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1397757893290228701/v.f1459082.mp4!X1397757893290228701.mp4",
          orgPrice: 88800,
          originItemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240914_5e0kcecfagf4bibb02i1ak6360ecc_1280x1707.jpg",
        },
        {
          discountPrice: "¥19.99",
          firstFrame:
            "https://1251964405.vod2.myqcloud.com/vodtranscq1251964405/3270835014798009224/snapshotByTimeOffset/snapshotByTimeOffset_10_0.jpg",
          clientUrl:
            "https://h5.mogu.com/detail-normal/index.html?itemId=1n6dq2s&acm=3.mce.1_4_1n6dq2s.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3A-sv_13qp7f4q341fo-src_1-pri_9_1857o0y-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1ette2-lc_201-x_1857o0y-sn_13r79i-pm_327",
          pcLink:
            "https://pc.mogu.com/content/live-slice/index.html?itemId=1n6dq2s&actorId=1857o0y&acm=3.mce.1_4_1n6dq2s.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3A-sv_13qp7f4q341fo-src_1-pri_9_1857o0y-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1ette2-lc_201-x_1857o0y-sn_13r79i-pm_327",
          actorAvatar:
            "https://s10.mogucdn.com/mlcdn/c45406/220324_09hilik743flcb02d12e35f13f9l7_400x400.jpg",
          type: 101,
          isSecKillItem: 0,
          hasSimilarity: true,
          explainId: 3153959,
          subtitle:
            "https://s10.mogucdn.com/mlcdn/bb4b01/240109_6ebgaag0g666a8cc0bjeg0304ag4d.srt",
          actorIdUrl: "1857o0y",
          videoH265Url:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/3270835014798009224/v.f985010.mp4!X3270835014798009224.mp4",
          id: "246242581700720006",
          actorId: 246242581,
          link: "https://h5.mogu.com/live-goods-explain/goods-explain.html?itemId=1n6dq2s&actorId=1857o0y&source=homepage_useItemId&dependOnSideList=0&dataSource=default&sideDataSource=actorSale&acm=3.mce.1_4_1n6dq2s.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3A-sv_13qp7f4q341fo-src_1-pri_9_1857o0y-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1ette2-lc_201-x_1857o0y-sn_13r79i-pm_327",
          videoId: 6375621,
          orgPrice: 88800,
          originItemImage:
            "https://s10.mogucdn.com/mlcdn/55cf19/240107_39kl468ij48id1iliaa15i52gblh6_640x962.png",
          showOrgPrice: "888.00",
          showDiscountPrice: "19.99",
          itemMarks: "1080 1091 1965 1019 1854 1733 733 1088 800",
          title: "毛衣长袖直筒套头圆领直筒气质新款毛衣DG117760",
          bar_taglist: [],
          liveLink:
            "https://h5.mogu.com/live-mona/live.html?actorId=1857o0y&actorUserId=1857o0y&roomId=12452841&itemId=1n6dq2s&acm=3.mce.1_4_1n6dq2s.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3A-sv_13qp7f4q341fo-src_1-pri_9_1857o0y-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1ette2-lc_201-x_1857o0y-sn_13r79i-pm_327",
          similarityUrl:
            "https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n6dq2s&acm=3.mce.1_4_1n6dq2s.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3A-sv_13qp7f4q341fo-src_1-pri_9_1857o0y-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1ette2-lc_201-x_1857o0y-sn_13r79i-pm_327&itemType=65&imgSurl=/mlcdn/55cf19/240107_39kl468ij48id1iliaa15i52gblh6_640x962.png",
          itemType: 65,
          acm: "3.mce.1_4_1n6dq2s.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3A-sv_13qp7f4q341fo-src_1-pri_9_1857o0y-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1ette2-lc_201-x_1857o0y-sn_13r79i-pm_327",
          liveStatus: 3,
          itemIdUrl: "1n6dq2s",
          promotion_taglist: [],
          actorTag: "新款女王",
          itemId: 700720006,
          explainItemType: 3,
          actorName: "叶子yzzz",
          lefttop_taglist: [
            {
              pagani_system_tagType: "newActTag",
              styleType: 1,
              img: "https://s11.mogucdn.com/mlcdn/c45406/221123_3kk6513eiaib7b6i2g26jehee4dcj_132x108.png",
              w: 132,
              h: 108,
              sort: "3",
            },
          ],
          videoUrl:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/3270835014798009224/v.f313648.mp4!X3270835014798009224.mp4",
          useVideoUrl: false,
          liveId: 12452841,
          itemImage:
            "https://s10.mogucdn.com/mlcdn/55cf19/240107_39kl468ij48id1iliaa15i52gblh6_640x962.png",
          sale: "销量198",
          imageAdapt: true,
          leftbottom_taglist: [],
          bottomIcon:
            "https://s10.mogucdn.com/mlcdn/c45406/200928_043cgf54cjia5d88gfj5j626id541_66x36.png",
        },
        {
          explainItemType: 3,
          imageAdapt: true,
          clientUrl:
            "https://h5.mogu.com/detail-normal/index.html?itemId=1n6tjug&acm=3.mce.1_4_1n6tjug.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3B-sv_1resqeiaryyg-src_1-pri_9_11no1nk-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1ev16s-lc_201-x_11no1nk-sn_13wp2o-pm_356",
          liveId: 12481222,
          subtitle:
            "https://s10.mogucdn.com/mlcdn/bb4b01/240616_0lla32fh98hjb4h37j9aj20fi6d57.srt",
          similarityUrl:
            "https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n6tjug&acm=3.mce.1_4_1n6tjug.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3B-sv_1resqeiaryyg-src_1-pri_9_11no1nk-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1ev16s-lc_201-x_11no1nk-sn_13wp2o-pm_356&itemType=65&imgSurl=/mlcdn/c45406/240613_378d7j20j0f8eac44jia1f36fkl5c_1266x1159.jpg",
          explainId: 3282140,
          link: "https://h5.mogu.com/live-goods-explain/goods-explain.html?itemId=1n6tjug&actorId=11no1nk&source=homepage_useItemId&dependOnSideList=0&dataSource=default&sideDataSource=actorSale&acm=3.mce.1_4_1n6tjug.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3B-sv_1resqeiaryyg-src_1-pri_9_11no1nk-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1ev16s-lc_201-x_11no1nk-sn_13wp2o-pm_356",
          discountPrice: "¥6.18",
          isSecKillItem: 0,
          lefttop_taglist: [
            {
              sort: "3",
              pagani_system_tagType: "newActTag",
              styleType: 1,
              img: "https://s11.mogucdn.com/mlcdn/c45406/221123_3kk6513eiaib7b6i2g26jehee4dcj_132x108.png",
              w: 132,
              h: 108,
            },
          ],
          videoUrl:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1253642699129811178/v.f1459083.mp4!X1253642699129811178.mp4",
          leftbottom_taglist: [],
          id: "50109588701089216",
          itemMarks: "1091 1019 1965 1733 7200 733 800 1088",
          actorTag: "小个子福音",
          itemType: 65,
          type: 101,
          originItemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240613_378d7j20j0f8eac44jia1f36fkl5c_1266x1159.jpg",
          showOrgPrice: "999.00",
          actorId: 50109588,
          actorName: "小甜心_呢",
          bar_taglist: [],
          bottomIcon:
            "https://s10.mogucdn.com/mlcdn/c45406/200928_043cgf54cjia5d88gfj5j626id541_66x36.png",
          actorAvatar:
            "https://s10.mogucdn.com/mlcdn/c45406/200405_8fc8l22aifb9l60lj832galii1d57_400x400.jpg",
          acm: "3.mce.1_4_1n6tjug.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3B-sv_1resqeiaryyg-src_1-pri_9_11no1nk-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1ev16s-lc_201-x_11no1nk-sn_13wp2o-pm_356",
          liveStatus: 3,
          pcLink:
            "https://pc.mogu.com/content/live-slice/index.html?itemId=1n6tjug&actorId=11no1nk&acm=3.mce.1_4_1n6tjug.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3B-sv_1resqeiaryyg-src_1-pri_9_11no1nk-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1ev16s-lc_201-x_11no1nk-sn_13wp2o-pm_356",
          title: "WJ30高级感痞帅开车大脸墨镜防紫外线太阳眼镜50125",
          promotion_taglist: [],
          sale: "销量814",
          liveLink:
            "https://h5.mogu.com/live-mona/live.html?actorId=11no1nk&actorUserId=11no1nk&roomId=12481222&itemId=1n6tjug&acm=3.mce.1_4_1n6tjug.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3B-sv_1resqeiaryyg-src_1-pri_9_11no1nk-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1ev16s-lc_201-x_11no1nk-sn_13wp2o-pm_356",
          videoId: 6543056,
          hasSimilarity: true,
          itemIdUrl: "1n6tjug",
          itemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240613_378d7j20j0f8eac44jia1f36fkl5c_1266x1159.jpg",
          itemId: 701089216,
          actorIdUrl: "11no1nk",
          videoH265Url:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1253642699129811178/v.f1459082.mp4!X1253642699129811178.mp4",
          orgPrice: 99900,
          firstFrame:
            "https://1251964405.vod2.myqcloud.com/vodtranscq1251964405/1253642699129811178/snapshotByTimeOffset/snapshotByTimeOffset_10_0.jpg",
          useVideoUrl: false,
          showDiscountPrice: "6.18",
        },
        {
          itemId: 701295929,
          liveLink:
            "https://h5.mogu.com/live-mona/live.html?actorId=1cp5ifq&actorUserId=1cp5ifq&roomId=12498681&itemId=1n72eui&acm=3.mce.1_4_1n72eui.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3C-sv_15u0h53t9odd6-src_1-pri_9_1cp5ifq-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evs4q-lc_201-x_1cp5ifq-sn_13zvww-pm_327",
          actorTag: "搭配不重样",
          videoUrl:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1397757891638346480/v.f1459083.mp4!X1397757891638346480.mp4",
          leftbottom_taglist: [],
          liveStatus: 3,
          promotion_taglist: [],
          bottomIcon:
            "https://s10.mogucdn.com/mlcdn/c45406/200928_043cgf54cjia5d88gfj5j626id541_66x36.png",
          actorIdUrl: "1cp5ifq",
          discountPrice: "¥89.9",
          bar_taglist: [],
          itemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240826_37ebi8chgcb2c93bg0ic28a8d7egi_750x800.jpg",
          subtitle:
            "https://s10.mogucdn.com/mlcdn/bb4b01/240826_4ikgb0l91a28aadg5gf71g9b286bi.srt",
          pcLink:
            "https://pc.mogu.com/content/live-slice/index.html?itemId=1n72eui&actorId=1cp5ifq&acm=3.mce.1_4_1n72eui.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3C-sv_15u0h53t9odd6-src_1-pri_9_1cp5ifq-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evs4q-lc_201-x_1cp5ifq-sn_13zvww-pm_327",
          link: "https://h5.mogu.com/live-goods-explain/goods-explain.html?itemId=1n72eui&actorId=1cp5ifq&source=homepage_useItemId&dependOnSideList=0&dataSource=default&sideDataSource=actorSale&acm=3.mce.1_4_1n72eui.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3C-sv_15u0h53t9odd6-src_1-pri_9_1cp5ifq-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evs4q-lc_201-x_1cp5ifq-sn_13zvww-pm_327",
          videoId: 6636273,
          originItemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240826_37ebi8chgcb2c93bg0ic28a8d7egi_750x800.jpg",
          firstFrame:
            "https://1251964405.vod2.myqcloud.com/vodtranscq1251964405/1397757891638346480/snapshotByTimeOffset/snapshotByTimeOffset_10_0.jpg",
          showOrgPrice: "999.00",
          actorId: 383920815,
          liveId: 12498681,
          similarityUrl:
            "https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n72eui&acm=3.mce.1_4_1n72eui.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3C-sv_15u0h53t9odd6-src_1-pri_9_1cp5ifq-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evs4q-lc_201-x_1cp5ifq-sn_13zvww-pm_327&itemType=65&imgSurl=/mlcdn/c45406/240826_37ebi8chgcb2c93bg0ic28a8d7egi_750x800.jpg",
          explainItemType: 3,
          itemType: 65,
          title: "2024新款圆领亮片小香风针织开衫835",
          orgPrice: 99900,
          lefttop_taglist: [
            {
              styleType: 1,
              img: "https://s11.mogucdn.com/mlcdn/c45406/221123_3kk6513eiaib7b6i2g26jehee4dcj_132x108.png",
              w: 132,
              h: 108,
              sort: "3",
              pagani_system_tagType: "newActTag",
            },
          ],
          useVideoUrl: false,
          sale: "销量29",
          actorName: "冉冉Rran",
          isSecKillItem: 0,
          hasSimilarity: true,
          imageAdapt: true,
          itemIdUrl: "1n72eui",
          itemMarks: "1091 1965 1019 1733 733 1000 2023 1088 800",
          explainId: 3356556,
          actorAvatar:
            "https://s10.mogucdn.com/mlcdn/c45406/200625_38c861ghafjg21a6jgh6jal2ih4ge_400x400.jpg",
          acm: "3.mce.1_4_1n72eui.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3C-sv_15u0h53t9odd6-src_1-pri_9_1cp5ifq-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evs4q-lc_201-x_1cp5ifq-sn_13zvww-pm_327",
          type: 101,
          videoH265Url:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1397757891638346480/v.f1459082.mp4!X1397757891638346480.mp4",
          id: "383920815701295929",
          clientUrl:
            "https://h5.mogu.com/detail-normal/index.html?itemId=1n72eui&acm=3.mce.1_4_1n72eui.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3C-sv_15u0h53t9odd6-src_1-pri_9_1cp5ifq-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evs4q-lc_201-x_1cp5ifq-sn_13zvww-pm_327",
          showDiscountPrice: "89.90",
        },
        {
          showDiscountPrice: "9.90",
          explainId: 1800874,
          bar_taglist: [],
          liveLink:
            "https://h5.mogu.com/live-mona/live.html?actorId=19pb9ua&actorUserId=19pb9ua&roomId=12352104&itemId=1mzg0v4&acm=3.mce.1_4_1mzg0v4.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3D-sv_14gh00dngcj1c-src_1-pri_9_19pb9ua-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1ephxk-lc_201-x_19pb9ua-sn_125764-pm_356",
          actorTag: "小个子穿搭",
          similarityUrl:
            "https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1mzg0v4&acm=3.mce.1_4_1mzg0v4.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3D-sv_14gh00dngcj1c-src_1-pri_9_19pb9ua-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1ephxk-lc_201-x_19pb9ua-sn_125764-pm_356&itemType=65&imgSurl=/mlcdn/c45406/210407_74c4d94l22jbch142ejf6jg4i4ke1_750x800.jpg",
          type: 101,
          title: "拍5免4  防晒手套女防紫外线薄冰袖",
          id: "293355949694894996",
          itemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/210407_74c4d94l22jbch142ejf6jg4i4ke1_750x800.jpg",
          explainItemType: 3,
          acm: "3.mce.1_4_1mzg0v4.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3D-sv_14gh00dngcj1c-src_1-pri_9_19pb9ua-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1ephxk-lc_201-x_19pb9ua-sn_125764-pm_356",
          imageAdapt: true,
          actorId: 293355949,
          actorIdUrl: "19pb9ua",
          link: "https://h5.mogu.com/live-goods-explain/goods-explain.html?itemId=1mzg0v4&actorId=19pb9ua&source=homepage_useItemId&dependOnSideList=0&dataSource=default&sideDataSource=actorSale&acm=3.mce.1_4_1mzg0v4.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3D-sv_14gh00dngcj1c-src_1-pri_9_19pb9ua-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1ephxk-lc_201-x_19pb9ua-sn_125764-pm_356",
          videoUrl:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/5285890818242765682/v.f313648.mp4!X5285890818242765682.mp4",
          leftbottom_taglist: [],
          subtitle:
            "https://s10.mogucdn.com/mlcdn/bb4b01/210512_5ba152hel409ic2ea4kb7h74lhcll.srt",
          pcLink:
            "https://pc.mogu.com/content/live-slice/index.html?itemId=1mzg0v4&actorId=19pb9ua&acm=3.mce.1_4_1mzg0v4.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3D-sv_14gh00dngcj1c-src_1-pri_9_19pb9ua-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1ephxk-lc_201-x_19pb9ua-sn_125764-pm_356",
          hasSimilarity: true,
          firstFrame:
            "https://1251964405.vod2.myqcloud.com/vodtranscq1251964405/5285890818242765682/snapshotByTimeOffset/snapshotByTimeOffset_10_0.jpg",
          videoH265Url:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/5285890818242765682/v.f523517.mp4!X5285890818242765682.mp4",
          useVideoUrl: false,
          lefttop_taglist: [
            {
              img: "https://s11.mogucdn.com/mlcdn/c45406/221123_3kk6513eiaib7b6i2g26jehee4dcj_132x108.png",
              w: 132,
              h: 108,
              sort: "3",
              pagani_system_tagType: "newActTag",
              styleType: 1,
            },
          ],
          itemIdUrl: "1mzg0v4",
          promotion_taglist: [],
          liveId: 12352104,
          itemId: 694894996,
          sale: "销量4.9万",
          discountPrice: "¥9.9",
          orgPrice: 9900,
          bottomIcon:
            "https://s10.mogucdn.com/mlcdn/c45406/200928_043cgf54cjia5d88gfj5j626id541_66x36.png",
          actorAvatar:
            "https://s10.mogucdn.com/mlcdn/c45406/200623_09id7e4617dc348e8jhh2d7cah2lc_400x400.jpg",
          originItemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/210407_74c4d94l22jbch142ejf6jg4i4ke1_750x800.jpg",
          showOrgPrice: "99.00",
          clientUrl:
            "https://h5.mogu.com/detail-normal/index.html?itemId=1mzg0v4&acm=3.mce.1_4_1mzg0v4.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3D-sv_14gh00dngcj1c-src_1-pri_9_19pb9ua-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1ephxk-lc_201-x_19pb9ua-sn_125764-pm_356",
          itemMarks: "1965 1091 1733 19992 733 1088 800",
          itemType: 65,
          videoId: 4452430,
          liveStatus: 3,
          actorName: "LuLu_林",
          isSecKillItem: 0,
        },
        {
          videoId: 6514451,
          orgPrice: 8800,
          firstFrame:
            "https://1251964405.vod2.myqcloud.com/vodtranscq1251964405/1253642697354958206/snapshotByTimeOffset/snapshotByTimeOffset_10_0.jpg",
          similarityUrl:
            "https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n6re80&acm=3.mce.1_4_1n6re80.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3E-sv_1mbr2t675qyo-src_1-pri_9_11clleq-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1euw60-lc_201-x_11clleq-sn_13vqu0-pm_356&itemType=65&imgSurl=/mlcdn/c45406/240518_266fe3fike7693d7g28h8i8c12k21_800x800.jpg",
          itemType: 65,
          title:
            "【超值8双】WJ夏季防晒冰袖男女冰丝袖套防紫外线骑行开车护臂袖50125",
          hasSimilarity: true,
          originItemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240518_266fe3fike7693d7g28h8i8c12k21_800x800.jpg",
          liveStatus: 3,
          showDiscountPrice: "9.90",
          pcLink:
            "https://pc.mogu.com/content/live-slice/index.html?itemId=1n6re80&actorId=11clleq&acm=3.mce.1_4_1n6re80.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3E-sv_1mbr2t675qyo-src_1-pri_9_11clleq-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1euw60-lc_201-x_11clleq-sn_13vqu0-pm_356",
          acm: "3.mce.1_4_1n6re80.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3E-sv_1mbr2t675qyo-src_1-pri_9_11clleq-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1euw60-lc_201-x_11clleq-sn_13vqu0-pm_356",
          showOrgPrice: "88.00",
          itemIdUrl: "1n6re80",
          useVideoUrl: false,
          actorAvatar:
            "https://s10.mogucdn.com/mlcdn/c45406/200405_7h26hakdcd5def09gc953361gcjid_400x400.jpg",
          videoH265Url:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1253642697354958206/v.f1459082.mp4!X1253642697354958206.mp4",
          id: "40814517701038916",
          promotion_taglist: [],
          explainId: 3259952,
          sale: "销量200",
          bottomIcon:
            "https://s10.mogucdn.com/mlcdn/c45406/200928_043cgf54cjia5d88gfj5j626id541_66x36.png",
          liveLink:
            "https://h5.mogu.com/live-mona/live.html?actorId=11clleq&actorUserId=11clleq&roomId=12477968&itemId=1n6re80&acm=3.mce.1_4_1n6re80.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3E-sv_1mbr2t675qyo-src_1-pri_9_11clleq-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1euw60-lc_201-x_11clleq-sn_13vqu0-pm_356",
          discountPrice: "¥9.9",
          type: 101,
          clientUrl:
            "https://h5.mogu.com/detail-normal/index.html?itemId=1n6re80&acm=3.mce.1_4_1n6re80.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3E-sv_1mbr2t675qyo-src_1-pri_9_11clleq-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1euw60-lc_201-x_11clleq-sn_13vqu0-pm_356",
          itemId: 701038916,
          actorIdUrl: "11clleq",
          lefttop_taglist: [
            {
              w: 132,
              h: 108,
              sort: "3",
              pagani_system_tagType: "newActTag",
              styleType: 1,
              img: "https://s11.mogucdn.com/mlcdn/c45406/221123_3kk6513eiaib7b6i2g26jehee4dcj_132x108.png",
            },
          ],
          videoUrl:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1253642697354958206/v.f1459083.mp4!X1253642697354958206.mp4",
          imageAdapt: true,
          itemMarks: "1965 1019 1091 1733 7200 733 1088 800",
          liveId: 12477968,
          actorId: 40814517,
          actorTag: "专注童装",
          explainItemType: 3,
          link: "https://h5.mogu.com/live-goods-explain/goods-explain.html?itemId=1n6re80&actorId=11clleq&source=homepage_useItemId&dependOnSideList=0&dataSource=default&sideDataSource=actorSale&acm=3.mce.1_4_1n6re80.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3E-sv_1mbr2t675qyo-src_1-pri_9_11clleq-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1euw60-lc_201-x_11clleq-sn_13vqu0-pm_356",
          isSecKillItem: 0,
          actorName: "米娜童装",
          leftbottom_taglist: [],
          bar_taglist: [],
          itemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240518_266fe3fike7693d7g28h8i8c12k21_800x800.jpg",
          subtitle:
            "https://s10.mogucdn.com/mlcdn/bb4b01/240519_5bhi0ll3fgi54icb0e1a446g55i56.srt",
        },
        {
          firstFrame:
            "https://1251964405.vod2.myqcloud.com/vodtranscq1251964405/243791579871498326/snapshotByTimeOffset/snapshotByTimeOffset_10_0.jpg",
          showOrgPrice: "29.90",
          showDiscountPrice: "9.90",
          itemId: 699750532,
          sale: "销量149",
          bottomIcon:
            "https://s10.mogucdn.com/mlcdn/c45406/200928_043cgf54cjia5d88gfj5j626id541_66x36.png",
          isSecKillItem: 0,
          id: "314632896699750532",
          promotion_taglist: [],
          explainId: 2926952,
          itemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/230209_71gb8415e5j1hg278ahcbgkbkb3h2_800x800.jpg",
          videoId: 6043691,
          acm: "3.mce.1_4_1n585z4.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3F-sv_14s403uokqukg-src_1-pri_9_1aencmw-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1eqtc8-lc_201-x_1aencmw-sn_13hgy0-pm_356",
          videoH265Url:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/243791579871498326/v.f985010.mp4!X243791579871498326.mp4",
          imageAdapt: true,
          liveStatus: 3,
          discountPrice: "¥9.9",
          hasSimilarity: true,
          originItemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/230209_71gb8415e5j1hg278ahcbgkbkb3h2_800x800.jpg",
          lefttop_taglist: [
            {
              img: "https://s11.mogucdn.com/mlcdn/c45406/221123_3kk6513eiaib7b6i2g26jehee4dcj_132x108.png",
              w: 132,
              h: 108,
              sort: "3",
              pagani_system_tagType: "newActTag",
              styleType: 1,
            },
          ],
          leftbottom_taglist: [],
          itemIdUrl: "1n585z4",
          itemMarks: "1965 1019 1080 1091 1733 7200 733 800 1088 2023 1000",
          bar_taglist: [],
          actorName: "小月月_呀",
          actorAvatar:
            "https://s10.mogucdn.com/mlcdn/c45406/200405_6f3cca5k278c50fk2gfeg2bkj6ci9_400x400.jpg",
          liveId: 12382824,
          link: "https://h5.mogu.com/live-goods-explain/goods-explain.html?itemId=1n585z4&actorId=1aencmw&source=homepage_useItemId&dependOnSideList=0&dataSource=default&sideDataSource=actorSale&acm=3.mce.1_4_1n585z4.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3F-sv_14s403uokqukg-src_1-pri_9_1aencmw-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1eqtc8-lc_201-x_1aencmw-sn_13hgy0-pm_356",
          videoUrl:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/243791579871498326/v.f313648.mp4!X243791579871498326.mp4",
          actorId: 314632896,
          pcLink:
            "https://pc.mogu.com/content/live-slice/index.html?itemId=1n585z4&actorId=1aencmw&acm=3.mce.1_4_1n585z4.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3F-sv_14s403uokqukg-src_1-pri_9_1aencmw-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1eqtc8-lc_201-x_1aencmw-sn_13hgy0-pm_356",
          explainItemType: 3,
          subtitle:
            "https://s10.mogucdn.com/mlcdn/bb4b01/230221_3j2elda5gi2kbc129gg68laj19fhf.srt",
          useVideoUrl: false,
          liveLink:
            "https://h5.mogu.com/live-mona/live.html?actorId=1aencmw&actorUserId=1aencmw&roomId=12382824&itemId=1n585z4&acm=3.mce.1_4_1n585z4.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3F-sv_14s403uokqukg-src_1-pri_9_1aencmw-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1eqtc8-lc_201-x_1aencmw-sn_13hgy0-pm_356",
          actorTag: "甜美源头货",
          actorIdUrl: "1aencmw",
          orgPrice: 2990,
          type: 101,
          title: "发夹女公主头小抓夹发饰碎发南瓜刘海夹爪子发卡头发夹子头饰卡子",
          clientUrl:
            "https://h5.mogu.com/detail-normal/index.html?itemId=1n585z4&acm=3.mce.1_4_1n585z4.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3F-sv_14s403uokqukg-src_1-pri_9_1aencmw-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1eqtc8-lc_201-x_1aencmw-sn_13hgy0-pm_356",
          similarityUrl:
            "https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n585z4&acm=3.mce.1_4_1n585z4.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3F-sv_14s403uokqukg-src_1-pri_9_1aencmw-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1eqtc8-lc_201-x_1aencmw-sn_13hgy0-pm_356&itemType=65&imgSurl=/mlcdn/c45406/230209_71gb8415e5j1hg278ahcbgkbkb3h2_800x800.jpg",
          itemType: 65,
        },
        {
          liveId: 12502651,
          videoId: 6659621,
          orgPrice: 99900,
          isSecKillItem: 1,
          hasSimilarity: true,
          videoUrl:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1397757893148052462/v.f1459083.mp4!X1397757893148052462.mp4",
          showOrgPrice: "999.00",
          showDiscountPrice: "99.00",
          itemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240911_8d7fla58ajdl83d4c30bkk7j6be2j_800x800.jpg",
          actorTag: "",
          explainItemType: 2,
          title: "法式七分袖树叶刺绣高腰大A版连衣裙",
          firstFrame:
            "https://1251964405.vod2.myqcloud.com/vodtranscq1251964405/1397757893148052462/snapshotByTimeOffset/snapshotByTimeOffset_10_0.jpg",
          itemMarks: "1965 1091 1080 1854 1733 2023 1000 800 1088 8080 1879",
          actorId: 447468070,
          bottomIcon:
            "https://s10.mogucdn.com/mlcdn/c45406/200928_043cgf54cjia5d88gfj5j626id541_66x36.png",
          leftTopImage:
            "https://s10.mogucdn.com/mlcdn/c45406/200831_5de05l0ii676cgdcgcbkaj824c2h6_141x48.png",
          leftbottom_taglist: [],
          liveStatus: 1,
          itemIdUrl: "1n747o8",
          subtitle:
            "https://s10.mogucdn.com/mlcdn/bb4b01/240914_82e3cc94lij0jih69f37gjjk9311k.srt",
          similarityUrl:
            "https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n747o8&acm=3.mce.1_4_1n747o8.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3G-sv_16srwdvo8q02g-src_1-pri_9_1estl6s-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evy9a-lc_201-x_1estl6s-sn_140pmm-pm_327&itemType=65&imgSurl=/mlcdn/c45406/240911_8d7fla58ajdl83d4c30bkk7j6be2j_800x800.jpg",
          actorIdUrl: "1estl6s",
          videoH265Url:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1397757893148052462/v.f1459082.mp4!X1397757893148052462.mp4",
          lefttop_taglist: [
            {
              w: 132,
              h: 108,
              sort: "3",
              pagani_system_tagType: "newActTag",
              styleType: 1,
              img: "https://s11.mogucdn.com/mlcdn/c45406/221123_3kk6513eiaib7b6i2g26jehee4dcj_132x108.png",
            },
          ],
          clientUrl:
            "https://h5.mogu.com/detail-normal/index.html?itemId=1n747o8&acm=3.mce.1_4_1n747o8.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3G-sv_16srwdvo8q02g-src_1-pri_9_1estl6s-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evy9a-lc_201-x_1estl6s-sn_140pmm-pm_327",
          acm: "3.mce.1_4_1n747o8.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3G-sv_16srwdvo8q02g-src_1-pri_9_1estl6s-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evy9a-lc_201-x_1estl6s-sn_140pmm-pm_327",
          actorName: "颜奇奇GiGi",
          originItemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240911_8d7fla58ajdl83d4c30bkk7j6be2j_800x800.jpg",
          chopHandCount: 0,
          imageAdapt: true,
          id: "447468070701337936",
          sale: "销量46",
          itemType: 65,
          discountPrice: "¥99",
          chopHandDesc: "0人刚刚剁了手",
          promotion_taglist: [],
          bar_taglist: [],
          liveLink:
            "https://h5.mogu.com/live-mona/live.html?actorId=1estl6s&actorUserId=1estl6s&roomId=12502651&itemId=1n747o8&acm=3.mce.1_4_1n747o8.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3G-sv_16srwdvo8q02g-src_1-pri_9_1estl6s-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evy9a-lc_201-x_1estl6s-sn_140pmm-pm_327",
          actorAvatar:
            "https://s10.mogucdn.com/mlcdn/c45406/211214_0160hhk091d1lalg63ad9ce81bj43_400x400.jpg",
          explainId: 3375811,
          itemId: 701337936,
          chopHandAvatar: [
            "https://s10.mogucdn.com/b7/pic/160115/nihao_ie4dcnrzgi3geyjrgyzdambqgiyde_100x100.png",
            "https://s10.mogucdn.com/b7/avatar/140422/7ps_kqzg23skozbewvsugfjeg5sckzsew_200x248.jpg",
            "https://s10.mogucdn.com/p2/170112/upload_7c4451la33afbh6i77gag1d59iaak_640x640.png",
          ],
          link: "https://h5.mogu.com/live-goods-explain/goods-explain.html?itemId=1n747o8&actorId=1estl6s&source=homepage_useItemId&dependOnSideList=0&dataSource=default&sideDataSource=actorSale&acm=3.mce.1_4_1n747o8.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3G-sv_16srwdvo8q02g-src_1-pri_9_1estl6s-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evy9a-lc_201-x_1estl6s-sn_140pmm-pm_327",
          type: 101,
          useVideoUrl: false,
          pcLink:
            "https://pc.mogu.com/content/live-slice/index.html?itemId=1n747o8&actorId=1estl6s&acm=3.mce.1_4_1n747o8.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3G-sv_16srwdvo8q02g-src_1-pri_9_1estl6s-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evy9a-lc_201-x_1estl6s-sn_140pmm-pm_327",
        },
        {
          liveLink:
            "https://h5.mogu.com/live-mona/live.html?actorId=11no1nk&actorUserId=11no1nk&roomId=12502506&itemId=1n74igu&acm=3.mce.1_4_1n74igu.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3H-sv_1resqeib2xku-src_1-pri_9_11no1nk-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evy18-lc_201-x_11no1nk-sn_140t78-pm_327",
          link: "https://h5.mogu.com/live-goods-explain/goods-explain.html?itemId=1n74igu&actorId=11no1nk&source=homepage_useItemId&dependOnSideList=0&dataSource=default&sideDataSource=actorSale&acm=3.mce.1_4_1n74igu.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3H-sv_1resqeib2xku-src_1-pri_9_11no1nk-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evy18-lc_201-x_11no1nk-sn_140t78-pm_327",
          orgPrice: 99900,
          firstFrame:
            "https://1251964405.vod2.myqcloud.com/vodtranscq1251964405/1397757893491403588/snapshotByTimeOffset/snapshotByTimeOffset_10_0.jpg",
          bar_taglist: [],
          bottomIcon:
            "https://s10.mogucdn.com/mlcdn/c45406/200928_043cgf54cjia5d88gfj5j626id541_66x36.png",
          actorTag: "小个子福音",
          similarityUrl:
            "https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n74igu&acm=3.mce.1_4_1n74igu.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3H-sv_1resqeib2xku-src_1-pri_9_11no1nk-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evy18-lc_201-x_11no1nk-sn_140t78-pm_327&itemType=65&imgSurl=/mlcdn/c45406/240919_3g2j1571497gl0l3fkdk4fl172iib_640x960.jpg",
          title: "新款百搭显瘦蕾丝好看衬衫上衣 8855",
          lefttop_taglist: [
            {
              styleType: 1,
              img: "https://s11.mogucdn.com/mlcdn/c45406/221123_3kk6513eiaib7b6i2g26jehee4dcj_132x108.png",
              w: 132,
              h: 108,
              sort: "3",
              pagani_system_tagType: "newActTag",
            },
          ],
          useVideoUrl: false,
          showDiscountPrice: "49.90",
          itemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240919_3g2j1571497gl0l3fkdk4fl172iib_640x960.jpg",
          type: 101,
          leftbottom_taglist: [],
          itemIdUrl: "1n74igu",
          pcLink:
            "https://pc.mogu.com/content/live-slice/index.html?itemId=1n74igu&actorId=11no1nk&acm=3.mce.1_4_1n74igu.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3H-sv_1resqeib2xku-src_1-pri_9_11no1nk-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evy18-lc_201-x_11no1nk-sn_140t78-pm_327",
          actorIdUrl: "11no1nk",
          itemType: 65,
          explainId: 3378126,
          liveId: 12502506,
          itemMarks: "1965 1019 1091 1733 733 800 1000 2023 1088",
          videoH265Url:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1397757893491403588/v.f1459082.mp4!X1397757893491403588.mp4",
          hasSimilarity: true,
          originItemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240919_3g2j1571497gl0l3fkdk4fl172iib_640x960.jpg",
          id: "50109588701344931",
          liveStatus: 3,
          actorAvatar:
            "https://s10.mogucdn.com/mlcdn/c45406/200405_8fc8l22aifb9l60lj832galii1d57_400x400.jpg",
          discountPrice: "¥49.9",
          actorName: "小甜心_呢",
          videoId: 6663277,
          videoUrl:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1397757893491403588/v.f1459083.mp4!X1397757893491403588.mp4",
          showOrgPrice: "999.00",
          itemId: 701344931,
          sale: "销量93",
          actorId: 50109588,
          subtitle:
            "https://s10.mogucdn.com/mlcdn/bb4b01/240919_6b7i9clkdik0ee3a7ld5gi8314lee.srt",
          promotion_taglist: [],
          explainItemType: 3,
          acm: "3.mce.1_4_1n74igu.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3H-sv_1resqeib2xku-src_1-pri_9_11no1nk-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evy18-lc_201-x_11no1nk-sn_140t78-pm_327",
          isSecKillItem: 0,
          imageAdapt: true,
          clientUrl:
            "https://h5.mogu.com/detail-normal/index.html?itemId=1n74igu&acm=3.mce.1_4_1n74igu.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3H-sv_1resqeib2xku-src_1-pri_9_11no1nk-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evy18-lc_201-x_11no1nk-sn_140t78-pm_327",
        },
        {
          itemMarks: "1965 1091 1019 1080 1854 1733 733 800 1088",
          originItemImage:
            "https://s10.mogucdn.com/mlcdn/55cf19/231116_71dd12fh0dig3cg640gak51i2f28k_640x962.png",
          itemId: 700607648,
          liveLink:
            "https://h5.mogu.com/live-mona/live.html?actorId=1857o0y&actorUserId=1857o0y&roomId=12443982&itemId=1n68woo&acm=3.mce.1_4_1n68woo.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3I-sv_13qp7f4q2z81k-src_1-pri_9_1857o0y-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1etfpw-lc_201-x_1857o0y-sn_13px7e-pm_327",
          link: "https://h5.mogu.com/live-goods-explain/goods-explain.html?itemId=1n68woo&actorId=1857o0y&source=homepage_useItemId&dependOnSideList=0&dataSource=default&sideDataSource=actorSale&acm=3.mce.1_4_1n68woo.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3I-sv_13qp7f4q2z81k-src_1-pri_9_1857o0y-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1etfpw-lc_201-x_1857o0y-sn_13px7e-pm_327",
          hasSimilarity: true,
          lefttop_taglist: [
            {
              styleType: 1,
              img: "https://s11.mogucdn.com/mlcdn/c45406/221123_3kk6513eiaib7b6i2g26jehee4dcj_132x108.png",
              w: 132,
              h: 108,
              sort: "3",
              pagani_system_tagType: "newActTag",
            },
          ],
          imageAdapt: true,
          leftbottom_taglist: [],
          sale: "购买",
          similarityUrl:
            "https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n68woo&acm=3.mce.1_4_1n68woo.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3I-sv_13qp7f4q2z81k-src_1-pri_9_1857o0y-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1etfpw-lc_201-x_1857o0y-sn_13px7e-pm_327&itemType=65&imgSurl=/mlcdn/55cf19/231116_71dd12fh0dig3cg640gak51i2f28k_640x962.png",
          actorName: "叶子yzzz",
          orgPrice: 88800,
          id: "246242581700607648",
          liveStatus: 3,
          showOrgPrice: "888.00",
          clientUrl:
            "https://h5.mogu.com/detail-normal/index.html?itemId=1n68woo&acm=3.mce.1_4_1n68woo.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3I-sv_13qp7f4q2z81k-src_1-pri_9_1857o0y-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1etfpw-lc_201-x_1857o0y-sn_13px7e-pm_327",
          pcLink:
            "https://pc.mogu.com/content/live-slice/index.html?itemId=1n68woo&actorId=1857o0y&acm=3.mce.1_4_1n68woo.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3I-sv_13qp7f4q2z81k-src_1-pri_9_1857o0y-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1etfpw-lc_201-x_1857o0y-sn_13px7e-pm_327",
          actorAvatar:
            "https://s10.mogucdn.com/mlcdn/c45406/220324_09hilik743flcb02d12e35f13f9l7_400x400.jpg",
          acm: "3.mce.1_4_1n68woo.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3I-sv_13qp7f4q2z81k-src_1-pri_9_1857o0y-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1etfpw-lc_201-x_1857o0y-sn_13px7e-pm_327",
          type: 101,
          bar_taglist: [],
          itemImage:
            "https://s10.mogucdn.com/mlcdn/55cf19/231116_71dd12fh0dig3cg640gak51i2f28k_640x962.png",
          itemType: 65,
          discountPrice: "¥19.99",
          videoUrl:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/3270835012507618720/v.f313648.mp4!X3270835012507618720.mp4",
          promotion_taglist: [],
          showDiscountPrice: "19.99",
          explainId: 3124113,
          actorIdUrl: "1857o0y",
          explainItemType: 3,
          firstFrame:
            "https://1251964405.vod2.myqcloud.com/vodtranscq1251964405/3270835012507618720/snapshotByTimeOffset/snapshotByTimeOffset_10_0.jpg",
          itemIdUrl: "1n68woo",
          useVideoUrl: false,
          actorId: 246242581,
          bottomIcon:
            "https://s10.mogucdn.com/mlcdn/c45406/200928_043cgf54cjia5d88gfj5j626id541_66x36.png",
          subtitle:
            "https://s10.mogucdn.com/mlcdn/bb4b01/231118_32l44kgilgggibli1ge44hkh813jj.srt",
          title: "针织衫薄款长袖流苏设计感秋季新款套头针织衫SH326843",
          videoH265Url:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/3270835012507618720/v.f985010.mp4!X3270835012507618720.mp4",
          isSecKillItem: 0,
          liveId: 12443982,
          actorTag: "新款女王",
          videoId: 6327190,
        },
        {
          sale: "销量1286",
          bottomIcon:
            "https://s10.mogucdn.com/mlcdn/c45406/200928_043cgf54cjia5d88gfj5j626id541_66x36.png",
          similarityUrl:
            "https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n6ne18&acm=3.mce.1_4_1n6ne18.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3J-sv_15u0h53t99cjw-src_1-pri_9_1cp5ifq-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evk2m-lc_201-x_1cp5ifq-sn_13ul5i-pm_327&itemType=65&imgSurl=/mlcdn/c45406/240406_03f46gflf3jcc62haab4jbi4c0690_800x800.jpg",
          orgPrice: 99900,
          lefttop_taglist: [
            {
              styleType: 1,
              img: "https://s11.mogucdn.com/mlcdn/c45406/221123_3kk6513eiaib7b6i2g26jehee4dcj_132x108.png",
              w: 132,
              h: 108,
              sort: "3",
              pagani_system_tagType: "newActTag",
            },
          ],
          clientUrl:
            "https://h5.mogu.com/detail-normal/index.html?itemId=1n6ne18&acm=3.mce.1_4_1n6ne18.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3J-sv_15u0h53t99cjw-src_1-pri_9_1cp5ifq-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evk2m-lc_201-x_1cp5ifq-sn_13ul5i-pm_327",
          liveId: 12493459,
          liveLink:
            "https://h5.mogu.com/live-mona/live.html?actorId=1cp5ifq&actorUserId=1cp5ifq&roomId=12493459&itemId=1n6ne18&acm=3.mce.1_4_1n6ne18.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3J-sv_15u0h53t99cjw-src_1-pri_9_1cp5ifq-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evk2m-lc_201-x_1cp5ifq-sn_13ul5i-pm_327",
          actorTag: "搭配不重样",
          pcLink:
            "https://pc.mogu.com/content/live-slice/index.html?itemId=1n6ne18&actorId=1cp5ifq&acm=3.mce.1_4_1n6ne18.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3J-sv_15u0h53t99cjw-src_1-pri_9_1cp5ifq-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evk2m-lc_201-x_1cp5ifq-sn_13ul5i-pm_327",
          actorAvatar:
            "https://s10.mogucdn.com/mlcdn/c45406/200625_38c861ghafjg21a6jgh6jal2ih4ge_400x400.jpg",
          originItemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240406_03f46gflf3jcc62haab4jbi4c0690_800x800.jpg",
          videoUrl:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1397757888412194445/v.f1459083.mp4!X1397757888412194445.mp4",
          itemIdUrl: "1n6ne18",
          actorId: 383920815,
          showDiscountPrice: "89.90",
          bar_taglist: [],
          itemId: 700945482,
          explainItemType: 3,
          actorName: "冉冉Rran",
          videoH265Url:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1397757888412194445/v.f1459082.mp4!X1397757888412194445.mp4",
          useVideoUrl: false,
          hasSimilarity: true,
          showOrgPrice: "999.00",
          itemMarks: "1965 1080 1091 1019 1854 1733 733 1088 1000 2023 800",
          itemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240406_03f46gflf3jcc62haab4jbi4c0690_800x800.jpg",
          promotion_taglist: [],
          acm: "3.mce.1_4_1n6ne18.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3J-sv_15u0h53t99cjw-src_1-pri_9_1cp5ifq-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evk2m-lc_201-x_1cp5ifq-sn_13ul5i-pm_327",
          videoId: 6476089,
          type: 101,
          id: "383920815700945482",
          firstFrame:
            "https://1251964405.vod2.myqcloud.com/vodtranscq1251964405/1397757888412194445/snapshotByTimeOffset/snapshotByTimeOffset_10_0.jpg",
          leftbottom_taglist: [],
          liveStatus: 3,
          explainId: 3232943,
          subtitle:
            "https://s10.mogucdn.com/mlcdn/bb4b01/240408_54ja168338896hl7hifdcfelgj466.srt",
          itemType: 65,
          link: "https://h5.mogu.com/live-goods-explain/goods-explain.html?itemId=1n6ne18&actorId=1cp5ifq&source=homepage_useItemId&dependOnSideList=0&dataSource=default&sideDataSource=actorSale&acm=3.mce.1_4_1n6ne18.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3J-sv_15u0h53t99cjw-src_1-pri_9_1cp5ifq-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evk2m-lc_201-x_1cp5ifq-sn_13ul5i-pm_327",
          isSecKillItem: 0,
          imageAdapt: true,
          discountPrice: "¥89.9",
          title: "發哥家 九分高腰阔腿牛仔裤 3099",
          actorIdUrl: "1cp5ifq",
        },
        {
          similarityUrl:
            "https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n5fdfq&acm=3.mce.1_4_1n5fdfq.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3K-sv_14gh00dnmbvly-src_1-pri_9_19pb9ua-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1eruia-lc_201-x_19pb9ua-sn_13iyds-pm_356&itemType=65&imgSurl=/mlcdn/c45406/230331_2c3k5435ad4706edc08di89hb558k_750x800.jpg",
          isSecKillItem: 0,
          imageAdapt: true,
          itemMarks: "1091 1019 1965 1733 733 800 1088",
          subtitle:
            "https://s10.mogucdn.com/mlcdn/bb4b01/230331_55d1agi5f3kb584ib6jalbb2739c2.srt",
          pcLink:
            "https://pc.mogu.com/content/live-slice/index.html?itemId=1n5fdfq&actorId=19pb9ua&acm=3.mce.1_4_1n5fdfq.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3K-sv_14gh00dnmbvly-src_1-pri_9_19pb9ua-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1eruia-lc_201-x_19pb9ua-sn_13iyds-pm_356",
          useVideoUrl: false,
          itemId: 699918663,
          actorId: 293355949,
          link: "https://h5.mogu.com/live-goods-explain/goods-explain.html?itemId=1n5fdfq&actorId=19pb9ua&source=homepage_useItemId&dependOnSideList=0&dataSource=default&sideDataSource=actorSale&acm=3.mce.1_4_1n5fdfq.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3K-sv_14gh00dnmbvly-src_1-pri_9_19pb9ua-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1eruia-lc_201-x_19pb9ua-sn_13iyds-pm_356",
          discountPrice: "¥9.9",
          lefttop_taglist: [
            {
              w: 132,
              h: 108,
              sort: "3",
              pagani_system_tagType: "newActTag",
              styleType: 1,
              img: "https://s11.mogucdn.com/mlcdn/c45406/221123_3kk6513eiaib7b6i2g26jehee4dcj_132x108.png",
            },
          ],
          videoUrl:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/243791580960380615/v.f313648.mp4!X243791580960380615.mp4",
          firstFrame:
            "https://1251964405.vod2.myqcloud.com/vodtranscq1251964405/243791580960380615/snapshotByTimeOffset/snapshotByTimeOffset_10_0.jpg",
          bottomIcon:
            "https://s10.mogucdn.com/mlcdn/c45406/200928_043cgf54cjia5d88gfj5j626id541_66x36.png",
          actorIdUrl: "19pb9ua",
          itemType: 65,
          clientUrl:
            "https://h5.mogu.com/detail-normal/index.html?itemId=1n5fdfq&acm=3.mce.1_4_1n5fdfq.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3K-sv_14gh00dnmbvly-src_1-pri_9_19pb9ua-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1eruia-lc_201-x_19pb9ua-sn_13iyds-pm_356",
          itemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/230331_2c3k5435ad4706edc08di89hb558k_750x800.jpg",
          videoId: 6092732,
          title: "5双装 防晒手套女防紫外线薄冰袖",
          originItemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/230331_2c3k5435ad4706edc08di89hb558k_750x800.jpg",
          actorTag: "小个子穿搭",
          actorAvatar:
            "https://s10.mogucdn.com/mlcdn/c45406/200623_09id7e4617dc348e8jhh2d7cah2lc_400x400.jpg",
          videoH265Url:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/243791580960380615/v.f985010.mp4!X243791580960380615.mp4",
          liveStatus: 3,
          promotion_taglist: [],
          explainId: 2961580,
          bar_taglist: [],
          actorName: "LuLu_林",
          hasSimilarity: true,
          leftbottom_taglist: [],
          showDiscountPrice: "9.90",
          liveId: 12406909,
          sale: "销量285",
          liveLink:
            "https://h5.mogu.com/live-mona/live.html?actorId=19pb9ua&actorUserId=19pb9ua&roomId=12406909&itemId=1n5fdfq&acm=3.mce.1_4_1n5fdfq.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3K-sv_14gh00dnmbvly-src_1-pri_9_19pb9ua-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1eruia-lc_201-x_19pb9ua-sn_13iyds-pm_356",
          explainItemType: 3,
          acm: "3.mce.1_4_1n5fdfq.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3K-sv_14gh00dnmbvly-src_1-pri_9_19pb9ua-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1eruia-lc_201-x_19pb9ua-sn_13iyds-pm_356",
          orgPrice: 9900,
          showOrgPrice: "99.00",
          itemIdUrl: "1n5fdfq",
          type: 101,
          id: "293355949699918663",
        },
        {
          link: "https://h5.mogu.com/live-goods-explain/goods-explain.html?itemId=1n73hxu&actorId=1721pi2&source=homepage_useItemId&dependOnSideList=0&dataSource=default&sideDataSource=actorSale&acm=3.mce.1_4_1n73hxu.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3L-sv_138ph9xo4lf9u-src_1-pri_9_1721pi2-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evu58-lc_201-x_1721pi2-sn_140fqa-pm_327",
          videoId: 6651773,
          originItemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240907_7ge3j3i3ak49bj054f0d38keje587_1179x1179.jpg",
          firstFrame:
            "https://1251964405.vod2.myqcloud.com/vodtranscq1251964405/1397757892413266278/snapshotByTimeOffset/snapshotByTimeOffset_10_0.jpg",
          showOrgPrice: "999.00",
          explainId: 3369397,
          actorId: 213351057,
          discountPrice: "¥79.9",
          videoUrl:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1397757892413266278/v.f1459083.mp4!X1397757892413266278.mp4",
          type: 101,
          imageAdapt: true,
          useVideoUrl: false,
          promotion_taglist: [],
          itemId: 701321261,
          bottomIcon:
            "https://s10.mogucdn.com/mlcdn/c45406/200928_043cgf54cjia5d88gfj5j626id541_66x36.png",
          pcLink:
            "https://pc.mogu.com/content/live-slice/index.html?itemId=1n73hxu&actorId=1721pi2&acm=3.mce.1_4_1n73hxu.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3L-sv_138ph9xo4lf9u-src_1-pri_9_1721pi2-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evu58-lc_201-x_1721pi2-sn_140fqa-pm_327",
          hasSimilarity: true,
          id: "213351057701321261",
          liveStatus: 3,
          clientUrl:
            "https://h5.mogu.com/detail-normal/index.html?itemId=1n73hxu&acm=3.mce.1_4_1n73hxu.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3L-sv_138ph9xo4lf9u-src_1-pri_9_1721pi2-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evu58-lc_201-x_1721pi2-sn_140fqa-pm_327",
          liveId: 12499986,
          actorTag: "独一家定制",
          videoH265Url:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1397757892413266278/v.f1459082.mp4!X1397757892413266278.mp4",
          itemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240907_7ge3j3i3ak49bj054f0d38keje587_1179x1179.jpg",
          actorIdUrl: "1721pi2",
          actorAvatar:
            "https://s10.mogucdn.com/mlcdn/c45406/200213_4laajhb0kde64bhbaa8kdclabf5f9_400x400.jpg",
          acm: "3.mce.1_4_1n73hxu.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3L-sv_138ph9xo4lf9u-src_1-pri_9_1721pi2-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evu58-lc_201-x_1721pi2-sn_140fqa-pm_327",
          actorName: "潘仲晴呀",
          title: "發哥家复古怀旧色 卷边直筒牛仔裤女 3053",
          itemIdUrl: "1n73hxu",
          itemMarks: "1019 1091 1965 1854 1733 733 800 1088 1529",
          explainItemType: 3,
          itemType: 65,
          orgPrice: 99900,
          isSecKillItem: 0,
          lefttop_taglist: [
            {
              styleType: 1,
              img: "https://s11.mogucdn.com/mlcdn/c45406/221123_3kk6513eiaib7b6i2g26jehee4dcj_132x108.png",
              w: 132,
              h: 108,
              sort: "3",
              pagani_system_tagType: "newActTag",
            },
          ],
          bar_taglist: [],
          sale: "销量71",
          subtitle:
            "https://s10.mogucdn.com/mlcdn/bb4b01/240907_40el9j1ekk78i3c2197kbli732gbh.srt",
          liveLink:
            "https://h5.mogu.com/live-mona/live.html?actorId=1721pi2&actorUserId=1721pi2&roomId=12499986&itemId=1n73hxu&acm=3.mce.1_4_1n73hxu.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3L-sv_138ph9xo4lf9u-src_1-pri_9_1721pi2-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evu58-lc_201-x_1721pi2-sn_140fqa-pm_327",
          leftbottom_taglist: [],
          showDiscountPrice: "79.90",
          similarityUrl:
            "https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n73hxu&acm=3.mce.1_4_1n73hxu.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3L-sv_138ph9xo4lf9u-src_1-pri_9_1721pi2-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evu58-lc_201-x_1721pi2-sn_140fqa-pm_327&itemType=65&imgSurl=/mlcdn/c45406/240907_7ge3j3i3ak49bj054f0d38keje587_1179x1179.jpg",
        },
        {
          similarityUrl:
            "https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n73x14&acm=3.mce.1_4_1n73x14.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3M-sv_16srwdvo8ppfc-src_1-pri_9_1estl6s-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evy9a-lc_201-x_1estl6s-sn_140q1y-pm_327&itemType=65&imgSurl=/mlcdn/c45406/240911_3964jek79fg4241b9b5d98d8bgb64_750x1000.jpg",
          acm: "3.mce.1_4_1n73x14.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3M-sv_16srwdvo8ppfc-src_1-pri_9_1estl6s-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evy9a-lc_201-x_1estl6s-sn_140q1y-pm_327",
          itemId: 701331040,
          showOrgPrice: "888.00",
          liveId: 12502651,
          itemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240911_3964jek79fg4241b9b5d98d8bgb64_750x1000.jpg",
          actorAvatar:
            "https://s10.mogucdn.com/mlcdn/c45406/211214_0160hhk091d1lalg63ad9ce81bj43_400x400.jpg",
          itemType: 65,
          link: "https://h5.mogu.com/live-goods-explain/goods-explain.html?itemId=1n73x14&actorId=1estl6s&source=homepage_useItemId&dependOnSideList=0&dataSource=default&sideDataSource=actorSale&acm=3.mce.1_4_1n73x14.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3M-sv_16srwdvo8ppfc-src_1-pri_9_1estl6s-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evy9a-lc_201-x_1estl6s-sn_140q1y-pm_327",
          orgPrice: 88800,
          useVideoUrl: false,
          explainId: 3376087,
          explainItemType: 2,
          videoId: 6659956,
          hasSimilarity: true,
          chopHandCount: 0,
          firstFrame:
            "https://1251964405.vod2.myqcloud.com/vodtranscq1251964405/1397757893010019724/snapshotByTimeOffset/snapshotByTimeOffset_10_0.jpg",
          itemMarks: "1080 1019 1965 1091 1854 1733 1000 1088 800 2023 8080",
          sale: "销量11",
          actorName: "颜奇奇GiGi",
          chopHandDesc: "0人刚刚剁了手",
          showDiscountPrice: "49.90",
          actorId: 447468070,
          subtitle:
            "https://s10.mogucdn.com/mlcdn/bb4b01/240914_45h6908d1e574a7ehdd06eke7kjb3.srt",
          pcLink:
            "https://pc.mogu.com/content/live-slice/index.html?itemId=1n73x14&actorId=1estl6s&acm=3.mce.1_4_1n73x14.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3M-sv_16srwdvo8ppfc-src_1-pri_9_1estl6s-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evy9a-lc_201-x_1estl6s-sn_140q1y-pm_327",
          discountPrice: "¥49.9",
          leftTopImage:
            "https://s10.mogucdn.com/mlcdn/c45406/200831_5de05l0ii676cgdcgcbkaj824c2h6_141x48.png",
          imageAdapt: true,
          bottomIcon:
            "https://s10.mogucdn.com/mlcdn/c45406/200928_043cgf54cjia5d88gfj5j626id541_66x36.png",
          actorIdUrl: "1estl6s",
          originItemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240911_3964jek79fg4241b9b5d98d8bgb64_750x1000.jpg",
          videoUrl:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1397757893010019724/v.f1459083.mp4!X1397757893010019724.mp4",
          liveStatus: 1,
          clientUrl:
            "https://h5.mogu.com/detail-normal/index.html?itemId=1n73x14&acm=3.mce.1_4_1n73x14.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3M-sv_16srwdvo8ppfc-src_1-pri_9_1estl6s-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evy9a-lc_201-x_1estl6s-sn_140q1y-pm_327",
          promotion_taglist: [],
          chopHandAvatar: [
            "https://s10.mogucdn.com/b7/avatar/140408/7ps_kqzggy2dozbdirdwgfjeg5sckzsew_960x640.jpg",
            "https://s10.mogucdn.com/b7/avatar/140504/7ps_kqze62teozbewv2ugfjeg5sckzsew_640x853.jpg",
            "https://s10.mogucdn.com/b7/pic/160115/nihao_ie4wcn3fha3geyjrgyzdambqgqyde_100x100.png",
          ],
          type: 101,
          lefttop_taglist: [
            {
              pagani_system_tagType: "newActTag",
              styleType: 1,
              img: "https://s11.mogucdn.com/mlcdn/c45406/221123_3kk6513eiaib7b6i2g26jehee4dcj_132x108.png",
              w: 132,
              h: 108,
              sort: "3",
            },
          ],
          isSecKillItem: 1,
          leftbottom_taglist: [],
          id: "447468070701331040",
          itemIdUrl: "1n73x14",
          bar_taglist: [],
          liveLink:
            "https://h5.mogu.com/live-mona/live.html?actorId=1estl6s&actorUserId=1estl6s&roomId=12502651&itemId=1n73x14&acm=3.mce.1_4_1n73x14.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3M-sv_16srwdvo8ppfc-src_1-pri_9_1estl6s-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evy9a-lc_201-x_1estl6s-sn_140q1y-pm_327",
          title: "韩系吊带+扭结长袖设计感百搭T恤",
          videoH265Url:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1397757893010019724/v.f1459082.mp4!X1397757893010019724.mp4",
          actorTag: "",
        },
        {
          useVideoUrl: false,
          liveId: 12485882,
          actorId: 314632896,
          originItemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240229_8278kgdh99bd09j932bjb4jf03had_800x800.jpg",
          id: "314632896701143884",
          itemId: 701143884,
          subtitle:
            "https://s10.mogucdn.com/mlcdn/bb4b01/240704_00c69572la2cg1d69i6khkdkbfihg.srt",
          liveLink:
            "https://h5.mogu.com/live-mona/live.html?actorId=1aencmw&actorUserId=1aencmw&roomId=12485882&itemId=1n6vw7k&acm=3.mce.1_4_1n6vw7k.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3N-sv_14s403uomeksw-src_1-pri_9_1aencmw-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1ev8do-lc_201-x_1aencmw-sn_13xjoa-pm_356",
          pcLink:
            "https://pc.mogu.com/content/live-slice/index.html?itemId=1n6vw7k&actorId=1aencmw&acm=3.mce.1_4_1n6vw7k.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3N-sv_14s403uomeksw-src_1-pri_9_1aencmw-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1ev8do-lc_201-x_1aencmw-sn_13xjoa-pm_356",
          link: "https://h5.mogu.com/live-goods-explain/goods-explain.html?itemId=1n6vw7k&actorId=1aencmw&source=homepage_useItemId&dependOnSideList=0&dataSource=default&sideDataSource=actorSale&acm=3.mce.1_4_1n6vw7k.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3N-sv_14s403uomeksw-src_1-pri_9_1aencmw-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1ev8do-lc_201-x_1aencmw-sn_13xjoa-pm_356",
          lefttop_taglist: [
            {
              img: "https://s11.mogucdn.com/mlcdn/c45406/221123_3kk6513eiaib7b6i2g26jehee4dcj_132x108.png",
              w: 132,
              h: 108,
              sort: "3",
              pagani_system_tagType: "newActTag",
              styleType: 1,
            },
          ],
          videoUrl:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1253642700271105878/v.f1459083.mp4!X1253642700271105878.mp4",
          leftbottom_taglist: [],
          liveStatus: 3,
          sale: "销量194",
          explainItemType: 3,
          type: 101,
          title: "新款韩款墨镜男女抖音直播遮阳太阳镜防紫外线眼镜",
          isSecKillItem: 0,
          clientUrl:
            "https://h5.mogu.com/detail-normal/index.html?itemId=1n6vw7k&acm=3.mce.1_4_1n6vw7k.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3N-sv_14s403uomeksw-src_1-pri_9_1aencmw-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1ev8do-lc_201-x_1aencmw-sn_13xjoa-pm_356",
          bar_taglist: [],
          similarityUrl:
            "https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n6vw7k&acm=3.mce.1_4_1n6vw7k.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3N-sv_14s403uomeksw-src_1-pri_9_1aencmw-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1ev8do-lc_201-x_1aencmw-sn_13xjoa-pm_356&itemType=65&imgSurl=/mlcdn/c45406/240229_8278kgdh99bd09j932bjb4jf03had_800x800.jpg",
          discountPrice: "¥7.9",
          videoId: 6569751,
          explainId: 3301969,
          actorTag: "甜美源头货",
          hasSimilarity: true,
          imageAdapt: true,
          itemIdUrl: "1n6vw7k",
          showDiscountPrice: "7.90",
          orgPrice: 4990,
          firstFrame:
            "https://1251964405.vod2.myqcloud.com/vodtranscq1251964405/1253642700271105878/snapshotByTimeOffset/snapshotByTimeOffset_10_0.jpg",
          promotion_taglist: [],
          actorIdUrl: "1aencmw",
          itemType: 65,
          actorName: "小月月_呀",
          showOrgPrice: "49.90",
          itemMarks: "1965 1019 1091 1080 1733 7200 733 1000 1088 800 2023",
          itemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240229_8278kgdh99bd09j932bjb4jf03had_800x800.jpg",
          bottomIcon:
            "https://s10.mogucdn.com/mlcdn/c45406/200928_043cgf54cjia5d88gfj5j626id541_66x36.png",
          actorAvatar:
            "https://s10.mogucdn.com/mlcdn/c45406/200405_6f3cca5k278c50fk2gfeg2bkj6ci9_400x400.jpg",
          acm: "3.mce.1_4_1n6vw7k.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3N-sv_14s403uomeksw-src_1-pri_9_1aencmw-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1ev8do-lc_201-x_1aencmw-sn_13xjoa-pm_356",
          videoH265Url:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1253642700271105878/v.f1459082.mp4!X1253642700271105878.mp4",
        },
        {
          liveId: 12502630,
          actorId: 50109588,
          bottomIcon:
            "https://s10.mogucdn.com/mlcdn/c45406/200928_043cgf54cjia5d88gfj5j626id541_66x36.png",
          actorName: "小甜心_呢",
          lefttop_taglist: [
            {
              styleType: 1,
              img: "https://s11.mogucdn.com/mlcdn/c45406/221123_3kk6513eiaib7b6i2g26jehee4dcj_132x108.png",
              w: 132,
              h: 108,
              sort: "3",
              pagani_system_tagType: "newActTag",
            },
          ],
          leftbottom_taglist: [],
          showOrgPrice: "999.00",
          chopHandAvatar: [
            "https://s10.mogucdn.com/b7/avatar/121018/sec_kqyugnlem5bfqrlwgfjeg5sckzsew_898x1370.jpg",
            "https://s10.mogucdn.com/b7/avatar/121018/q9dg_kqyvulsem5bhsvtwgfjeg5sckzsew_898x1370.jpg",
            "https://s10.mogucdn.com/p1/160712/1_ifrgcm3ggq4dmnlchezdambqmeyde_150x150.jpg",
          ],
          acm: "3.mce.1_4_1n7231c.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3O-sv_1resqeib0i5c-src_1-pri_9_11no1nk-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evy84-lc_201-x_11no1nk-sn_13zrys-pm_327",
          leftTopImage:
            "https://s10.mogucdn.com/mlcdn/c45406/200831_5de05l0ii676cgdcgcbkaj824c2h6_141x48.png",
          itemIdUrl: "1n7231c",
          useVideoUrl: false,
          explainId: 3353998,
          sale: "销量1486",
          link: "https://h5.mogu.com/live-goods-explain/goods-explain.html?itemId=1n7231c&actorId=11no1nk&source=homepage_useItemId&dependOnSideList=0&dataSource=default&sideDataSource=actorSale&acm=3.mce.1_4_1n7231c.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3O-sv_1resqeib0i5c-src_1-pri_9_11no1nk-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evy84-lc_201-x_11no1nk-sn_13zrys-pm_327",
          videoH265Url:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1397757891479064802/v.f1459082.mp4!X1397757891479064802.mp4",
          orgPrice: 99900,
          chopHandDesc: "6人刚刚剁了手",
          explainItemType: 2,
          videoUrl:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1397757891479064802/v.f1459083.mp4!X1397757891479064802.mp4",
          imageAdapt: true,
          similarityUrl:
            "https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n7231c&acm=3.mce.1_4_1n7231c.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3O-sv_1resqeib0i5c-src_1-pri_9_11no1nk-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evy84-lc_201-x_11no1nk-sn_13zrys-pm_327&itemType=65&imgSurl=/mlcdn/c45406/240816_6ei9ihl00flid5fi1k58df9121775_2479x3327.jpg",
          pcLink:
            "https://pc.mogu.com/content/live-slice/index.html?itemId=1n7231c&actorId=11no1nk&acm=3.mce.1_4_1n7231c.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3O-sv_1resqeib0i5c-src_1-pri_9_11no1nk-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evy84-lc_201-x_11no1nk-sn_13zrys-pm_327",
          title: "【月牙弯弯】时尚毛衣（3-30天发货）",
          originItemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240816_6ei9ihl00flid5fi1k58df9121775_2479x3327.jpg",
          itemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240816_6ei9ihl00flid5fi1k58df9121775_2479x3327.jpg",
          itemId: 701288276,
          actorTag: "小个子福音",
          actorAvatar:
            "https://s10.mogucdn.com/mlcdn/c45406/200405_8fc8l22aifb9l60lj832galii1d57_400x400.jpg",
          discountPrice: "¥69.9",
          chopHandCount: 6,
          id: "50109588701288276",
          promotion_taglist: [],
          liveLink:
            "https://h5.mogu.com/live-mona/live.html?actorId=11no1nk&actorUserId=11no1nk&roomId=12502630&itemId=1n7231c&acm=3.mce.1_4_1n7231c.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3O-sv_1resqeib0i5c-src_1-pri_9_11no1nk-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evy84-lc_201-x_11no1nk-sn_13zrys-pm_327",
          actorIdUrl: "11no1nk",
          videoId: 6633204,
          hasSimilarity: true,
          firstFrame:
            "https://1251964405.vod2.myqcloud.com/vodtranscq1251964405/1397757891479064802/snapshotByTimeOffset/snapshotByTimeOffset_10_0.jpg",
          itemMarks: "1965 1091 1733 800 1088 8080 1879 1538",
          clientUrl:
            "https://h5.mogu.com/detail-normal/index.html?itemId=1n7231c&acm=3.mce.1_4_1n7231c.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3O-sv_1resqeib0i5c-src_1-pri_9_11no1nk-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evy84-lc_201-x_11no1nk-sn_13zrys-pm_327",
          showDiscountPrice: "69.90",
          bar_taglist: [],
          subtitle:
            "https://s10.mogucdn.com/mlcdn/bb4b01/240824_3k0i3dbab5f90hbilb5h4jfh379i3.srt",
          itemType: 65,
          type: 101,
          isSecKillItem: 1,
          liveStatus: 1,
        },
        {
          itemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240518_266fe3fike7693d7g28h8i8c12k21_800x800.jpg",
          link: "https://h5.mogu.com/live-goods-explain/goods-explain.html?itemId=1n6s6mq&actorId=1elvlo6&source=homepage_useItemId&dependOnSideList=0&dataSource=default&sideDataSource=actorSale&acm=3.mce.1_4_1n6s6mq.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3P-sv_16pl22bmk6idu-src_1-pri_9_1elvlo6-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evglk-lc_201-x_1elvlo6-sn_13vz2g-pm_356",
          useVideoUrl: false,
          lefttop_taglist: [
            {
              pagani_system_tagType: "newActTag",
              styleType: 1,
              img: "https://s11.mogucdn.com/mlcdn/c45406/221123_3kk6513eiaib7b6i2g26jehee4dcj_132x108.png",
              w: 132,
              h: 108,
              sort: "3",
            },
          ],
          id: "441636383701057325",
          promotion_taglist: [],
          itemMarks: "1965 1091 1019 1733 7200 733 1088 800",
          liveLink:
            "https://h5.mogu.com/live-mona/live.html?actorId=1elvlo6&actorUserId=1elvlo6&roomId=12491208&itemId=1n6s6mq&acm=3.mce.1_4_1n6s6mq.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3P-sv_16pl22bmk6idu-src_1-pri_9_1elvlo6-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evglk-lc_201-x_1elvlo6-sn_13vz2g-pm_356",
          acm: "3.mce.1_4_1n6s6mq.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3P-sv_16pl22bmk6idu-src_1-pri_9_1elvlo6-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evglk-lc_201-x_1elvlo6-sn_13vz2g-pm_356",
          type: 101,
          videoUrl:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1253642697752472751/v.f1459083.mp4!X1253642697752472751.mp4",
          pcLink:
            "https://pc.mogu.com/content/live-slice/index.html?itemId=1n6s6mq&actorId=1elvlo6&acm=3.mce.1_4_1n6s6mq.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3P-sv_16pl22bmk6idu-src_1-pri_9_1elvlo6-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evglk-lc_201-x_1elvlo6-sn_13vz2g-pm_356",
          itemType: 65,
          discountPrice: "¥9.9",
          firstFrame:
            "https://1251964405.vod2.myqcloud.com/vodtranscq1251964405/1253642697752472751/snapshotByTimeOffset/snapshotByTimeOffset_10_0.jpg",
          showDiscountPrice: "9.90",
          sale: "销量200",
          videoId: 6521445,
          videoH265Url:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1253642697752472751/v.f1459082.mp4!X1253642697752472751.mp4",
          clientUrl:
            "https://h5.mogu.com/detail-normal/index.html?itemId=1n6s6mq&acm=3.mce.1_4_1n6s6mq.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3P-sv_16pl22bmk6idu-src_1-pri_9_1elvlo6-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evglk-lc_201-x_1elvlo6-sn_13vz2g-pm_356",
          itemId: 701057325,
          subtitle:
            "https://s10.mogucdn.com/mlcdn/bb4b01/240526_14252ea6dh3d2lk1ficcl7e625i6j.srt",
          actorAvatar:
            "https://s10.mogucdn.com/mlcdn/c45406/211214_33fb209chei5ca9glkekl0f1e3e3h_400x400.jpg",
          hasSimilarity: true,
          liveStatus: 3,
          isSecKillItem: 0,
          leftbottom_taglist: [],
          showOrgPrice: "88.00",
          explainId: 3265288,
          bar_taglist: [],
          bottomIcon:
            "https://s10.mogucdn.com/mlcdn/c45406/200928_043cgf54cjia5d88gfj5j626id541_66x36.png",
          explainItemType: 3,
          actorName: "左左yzzz",
          actorTag: "",
          originItemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240518_266fe3fike7693d7g28h8i8c12k21_800x800.jpg",
          imageAdapt: true,
          itemIdUrl: "1n6s6mq",
          liveId: 12491208,
          similarityUrl:
            "https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n6s6mq&acm=3.mce.1_4_1n6s6mq.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3P-sv_16pl22bmk6idu-src_1-pri_9_1elvlo6-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evglk-lc_201-x_1elvlo6-sn_13vz2g-pm_356&itemType=65&imgSurl=/mlcdn/c45406/240518_266fe3fike7693d7g28h8i8c12k21_800x800.jpg",
          title: "【8双】WJ夏季防晒冰袖男女冰丝袖套防紫外线骑行开车护臂袖50125",
          orgPrice: 8800,
          actorId: 441636383,
          actorIdUrl: "1elvlo6",
        },
        {
          hasSimilarity: true,
          id: "246242581701328096",
          itemIdUrl: "1n73shk",
          itemMarks: "1019 1091 1965 1733 733 1000 800 1088 2023",
          subtitle:
            "https://s10.mogucdn.com/mlcdn/bb4b01/240912_09911fdc6fa7ci9ebjj463dd5i5b7.srt",
          videoUrl:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1397757892894632739/v.f1459083.mp4!X1397757892894632739.mp4",
          liveStatus: 3,
          useVideoUrl: false,
          itemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240911_04a03j7k0dh1jkijc56agigfj7j3g_750x1000.jpg",
          imageAdapt: true,
          clientUrl:
            "https://h5.mogu.com/detail-normal/index.html?itemId=1n73shk&acm=3.mce.1_4_1n73shk.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3Q-sv_13qp7f4q3u3ug-src_1-pri_9_1857o0y-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evvoe-lc_201-x_1857o0y-sn_140mdc-pm_327",
          explainId: 3373700,
          bottomIcon:
            "https://s10.mogucdn.com/mlcdn/c45406/200928_043cgf54cjia5d88gfj5j626id541_66x36.png",
          actorAvatar:
            "https://s10.mogucdn.com/mlcdn/c45406/220324_09hilik743flcb02d12e35f13f9l7_400x400.jpg",
          acm: "3.mce.1_4_1n73shk.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3Q-sv_13qp7f4q3u3ug-src_1-pri_9_1857o0y-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evvoe-lc_201-x_1857o0y-sn_140mdc-pm_327",
          actorName: "叶子yzzz",
          firstFrame:
            "https://1251964405.vod2.myqcloud.com/vodtranscq1251964405/1397757892894632739/snapshotByTimeOffset/snapshotByTimeOffset_10_0.jpg",
          showDiscountPrice: "36.90",
          bar_taglist: [],
          sale: "销量554",
          actorId: 246242581,
          liveLink:
            "https://h5.mogu.com/live-mona/live.html?actorId=1857o0y&actorUserId=1857o0y&roomId=12500979&itemId=1n73shk&acm=3.mce.1_4_1n73shk.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3Q-sv_13qp7f4q3u3ug-src_1-pri_9_1857o0y-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evvoe-lc_201-x_1857o0y-sn_140mdc-pm_327",
          similarityUrl:
            "https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n73shk&acm=3.mce.1_4_1n73shk.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3Q-sv_13qp7f4q3u3ug-src_1-pri_9_1857o0y-dm1_1000-mid_154283-hbbg_0-sd_116_115-xid_87-xm_1evvoe-lc_201-x_1857o0y-sn_140mdc-pm_327&itemType=65&imgSurl=/mlcdn/c45406/240911_04a03j7k0dh1jkijc56agigfj7j3g_750x1000.jpg",
          actorIdUrl: "1857o0y",
          explainItemType: 3,
          videoId: 6656928,
          orgPrice: 99900,
          leftbottom_taglist: [],
          liveId: 12500979,
          videoH265Url:
            "https://tencentvod.mogucdn.com/vodtranscq1251964405/1397757892894632739/v.f1459082.mp4!X1397757892894632739.mp4",
          originItemImage:
            "https://s10.mogucdn.com/mlcdn/c45406/240911_04a03j7k0dh1jkijc56agigfj7j3g_750x1000.jpg",
          lefttop_taglist: [
            {
              w: 132,
              h: 108,
              sort: "3",
              pagani_system_tagType: "newActTag",
              styleType: 1,
              img: "https://s11.mogucdn.com/mlcdn/c45406/221123_3kk6513eiaib7b6i2g26jehee4dcj_132x108.png",
            },
          ],
          itemType: 65,
          discountPrice: "¥36.9",
          isSecKillItem: 0,
          showOrgPrice: "999.00",
          itemId: 701328096,
          pcLink:
            "https://pc.mogu.com/content/live-slice/index.html?itemId=1n73shk&actorId=1857o0y&acm=3.mce.1_4_1n73shk.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3Q-sv_13qp7f4q3u3ug-src_1-pri_9_1857o0y-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evvoe-lc_201-x_1857o0y-sn_140mdc-pm_327",
          link: "https://h5.mogu.com/live-goods-explain/goods-explain.html?itemId=1n73shk&actorId=1857o0y&source=homepage_useItemId&dependOnSideList=0&dataSource=default&sideDataSource=actorSale&acm=3.mce.1_4_1n73shk.0.108975-110727-110739.uQATaup1fRqHp.gi_uQATaup1fRrt3Q-sv_13qp7f4q3u3ug-src_1-pri_9_1857o0y-dm1_1000-mid_154283-sd_116_115-xid_87-xm_1evvoe-lc_201-x_1857o0y-sn_140mdc-pm_327",
          type: 101,
          title: "法式白色双拉链长袖衬衫女设计感宽松显瘦小众百搭上衣",
          promotion_taglist: [],
          actorTag: "新款女王",
        },
      ],
    },
  });
});

/* 获取搜索结果 */
router.get("/home/hotWords", function (req, res, next) {
  connection.query("SELECT * FROM hot_word", "", function (error, results) {
    if (error) {
      console.error("Database query error: ", error);
      return res.status(500).send({
        code: 0,
        message: "服务器内部错误",
      });
    }

    res.send({
      code: 200,
      data: {
        list: results,
      },
    });
  });
});

module.exports = router;
