// ============================
// 地図の初期表示（シエナ中心）
// ============================
const map = L.map('map').setView([43.3186, 11.3310], 15);

// OpenStreetMap のタイルを設定
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// 詳細エリアの要素を取得
const detailEl = document.getElementById('spotDetail');

// ============================
// 詳細エリアにスポット情報を描画する関数
// ============================
function showSpotDetail(spot) {
  if (!spot || !detailEl) return;

  // メイン画像（images[0] を優先）
  let mainImage = "";
  if (Array.isArray(spot.images) && spot.images.length > 0) {
    mainImage = spot.images[0];
  } else if (spot.thumb) {
    mainImage = spot.thumb; // 旧データ互換
  }

  // 改行を <br> に置換（文章の雰囲気を保つ）
  const formatText = text => (text ? text.replace(/\n/g, "<br>") : "");

  // Practical Info があるかどうか
  const info = spot.info || {};
  const hasInfo = info.ticket || info.time || info.note;

  // HTML生成
  const html = `
    <h2 class="spotDetail__title">${spot.name}</h2>
    <p class="spotDetail__short">${spot.short ?? ""}</p>

    ${mainImage ? `<img src="${mainImage}" alt="${spot.name}" class="spotDetail__thumb" style="width:100%;border-radius:8px;margin:12px 0;">` : ""}

    <p class="spotDetail__body">${formatText(spot.story)}</p>

    <div class="spotDetail__tips">
      ${spot.photo_tip ? `<p><strong>📸 Photo Tip:</strong> ${formatText(spot.photo_tip)}</p>` : ""}
      ${spot.walk_tip ? `<p><strong>🚶 Walk Tip:</strong> ${formatText(spot.walk_tip)}</p>` : ""}
    </div>

    ${hasInfo ? `
      <section class="spotDetail__info" style="margin-top:16px;">
        <h3 class="spotDetail__infoTitle">ℹ️ Practical Info</h3>
        <ul class="spotDetail__infoList">
          ${info.ticket ? `<li><strong>🎫 Ticket:</strong> ${info.ticket}</li>` : ""}
          ${info.time ? `<li><strong>🕒 Time:</strong> ${info.time}</li>` : ""}
          ${info.note ? `<li><strong>⚠ Note:</strong> ${info.note}</li>` : ""}
        </ul>
      </section>
    ` : ""}
  `;

  detailEl.innerHTML = html;
}

// ============================
// spots.json を読み込んでマーカーを立てる
// ============================
fetch('assets/data/spots.json')
  .then(response => response.json())
  .then(data => {
    console.log('読み込み成功！', data);
    const sienaSpots = data.siena || [];

    // 初期表示（カンポ広場）
    if (sienaSpots.length > 0) {
      showSpotDetail(sienaSpots[0]);
    } else {
      detailEl.innerHTML = `<p style="color:#666;">マップ上のスポットを選択してください</p>`;
    }

    // 全スポットのマーカーを設置
    sienaSpots.forEach(spot => {
      const { lat, lng, name, short } = spot;
      const marker = L.marker([lat, lng]).addTo(map);

      marker.bindPopup(`<strong>${name}</strong><br><small>${short}</small>`);
      marker.on('click', () => showSpotDetail(spot));
    });
  })
  .catch(error => {
    console.error('スポット読み込みエラー', error);
    detailEl.innerHTML = `<p style="color:red;">データ読み込みエラーが発生しました。</p>`;
  });
