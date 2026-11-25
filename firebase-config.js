// Firebase の接続設定（ヒメチケ：himeticket-523fa）
export const firebaseConfig = {
  apiKey: "AIzaSyA2u9hI8R0_yG7qK1vX5mN3pL8oW4eT6zY",
  authDomain: "himeticket-523fa.firebaseapp.com",
  projectId: "himeticket-523fa",
  storageBucket: "himeticket-523fa.appspot.com",
  messagingSenderId: "849201736512",
  appId: "1:849201736512:web:9c8d7e6f5a4b3c2d1e0f9a"
};

// カテゴリ（公開ページ・出品者ページ共通）
export const CATEGORIES = [
  { id: "concert", label: "コンサート", color: "#C8254E" },
  { id: "sports",  label: "スポーツ",   color: "#1F6FB2" },
  { id: "stage",   label: "演劇・舞台", color: "#7A3FA0" },
  { id: "movie",   label: "映画",       color: "#2F3A56" },
  { id: "leisure", label: "レジャー",   color: "#1F7A5A" },
  { id: "other",   label: "その他",     color: "#8A6A2E" }
];
