/**
 * Rektör Oldum — Sürüm Notları
 * Her sürümde başa yeni entry ekle. version + date + items[].
 * type: 'fix' (düzeltme) | 'feat' (yeni) | 'balance' (denge) | 'security'
 */

export const CHANGELOG = [
  {
    version: '0.4.73',
    date: '2026-09-13',
    title: 'Sayfa Değişimlerinde Yinelenen Başarım Bildirimi Düzeltmesi',
    items: [
      { type: 'fix', text: 'Her sekme ve sayfa değişiminde "KAZANIM AÇILDI!" bildiriminin tekrar tekrar ekrana gelmesi sorunu giderildi.' },
      { type: 'fix', text: 'Başarım kontrolü ve bildirim tetikleyicisi üst bar (updateTopBar) render akışından kaldırıldı; gereksiz tetiklemeler önlendi.' },
      { type: 'fix', text: 'Kayıt yükleme aşamasında (setState) üniversitenin zaten hak ettiği başarımların kalıcı state içine sessizce işlenmesi sağlandı; eski kayıtlar yüklendiğinde mükerrer bildirim çıkması engellendi.' },
      { type: 'fix', text: 'Başarımlar sekmesine tıklandığında anlık başarım durumu kalıcı olarak senkronize edilir.' },
    ],
  },
  {
    version: '0.4.72',
    date: '2026-09-12',
    title: 'Araştırma Yönetimi Paneli Yükleme Düzeltmesi',
    items: [
      { type: 'fix', text: 'Araştırma sekmesinin boş görünmesine yol açan değişken tanımlama hatası giderildi; aktif projeler, fonlar ve üniversite payı hesaplamaları eksiksiz render ediliyor.' },
    ],
  },
  {
    version: '0.4.71',
    date: '2026-09-12',
    title: 'Özel Sektör / Sanayi Ar-Ge Projeleri Tanıma ve Puanlama Düzeltmesi',
    items: [
      { type: 'fix', text: 'Endüstri (Industry) sütununda "Özel Sektör Sanayi Projeleri (-25 Puan / 0 aktif proje)" hatası giderildi; sanayi çağrılarından üretilen tüm projeler artık eksiksiz tanınıyor.' },
      { type: 'fix', text: 'Dış çağrı üretiminde (externalCalls) Özel Sektör ve AB proje etiketlerinin kaybolmasına neden olan yapısal eksiklik giderildi.' },
      { type: 'fix', text: '"Sanayi İşbirliği" çağrısına isPrivateSector etiketi ve genel gider kesinti oranı tanımlandı.' },
      { type: 'fix', text: 'Mevcut kayıtlı oyunlar için otomatik onarım: Kayıt yüklendiğinde sanayi ve özel sektör ortaklı tüm projeler anında isPrivateSector olarak etiketlenerek 25/25 tam puana kavuşturulur.' },
      { type: 'feat', text: 'Araştırma sekmesinde Özel Sektör / Sanayi projeleri altın sarısı bordür ve rozetle, AB projeleri mavi rozetle görsel olarak belirginleştirildi.' },
    ],
  },
  {
    version: '0.4.70',
    date: '2026-09-12',
    title: 'AB / Horizon Projeleri ve Akreditasyon Yenileme Sistemi Düzeltmesi',
    items: [
      { type: 'fix', text: 'Uluslararası Görünüm (THE WUR) sütununda AB Horizon Europe projelerinin tanınmama ve 0 adet görünme sorunu giderildi; aktif ve tamamlanan Horizon/ERC projeleri artık puanlamaya ve kayıp analizine tam olarak yansıtılıyor.' },
      { type: 'fix', text: 'Akreditasyon (ABET / MÜDEK / THEQA) erken yenileme başvurusu yapıldığında bölümün aktif akreditasyonunun silinmesi / kaybedilmiş gibi görünmesi hatası giderildi; yenileme süresince akredite statüsü ve tüm kazanımları korunur.' },
      { type: 'fix', text: 'Uluslararası Görünüm panelinde ABET ve THEQA akreditasyonlarının tanınmasını engelleyen statü kontrolü hatası düzeltildi; Küresel Tesisler & Akreditasyonlar puanı tam ve eksiksiz hesaplanıyor.' },
      { type: 'fix', text: 'Mevcut kayıtlı oyunlar için otomatik onarım eklendi: Yenilenmekte olan akreditasyonlar ve Horizon projeleri kayıt yüklendiğinde anında geçerli duruma getirilir.' },
      { type: 'feat', text: 'Akreditasyon ve Bölümler ekranlarında yenilenmekte olan akreditasyonlar için "✓ Akredite ⏳ Yenileniyor" durumu ve kalan inceleme süresi gösterimi eklendi.' },
    ],
  },
  {
    version: '0.4.69',
    date: '2026-09-12',
    title: 'İdari Birimler: Yönetici Onaylı Otomatik Terfi Sistemi',
    items: [
      { type: 'feat', text: 'Birim kartlarına "⚡ Otomatik Terfi" butonu eklendi: Birimin başında yönetici (Müdür / Müdür Yrd.) varsa o birimdeki tüm terfiye hak kazanmış personeller tek tıkla otomatik terfi ettirilir.' },
      { type: 'feat', text: 'Yöneticisi olmayan birimlerde buton korumaya alınarak yönetici atama gerekliliği görsel olarak belirtildi.' },
      { type: 'feat', text: 'İdari Birimler üst paneline "🎓 Otomatik Terfi" butonu ve Terfi Bekleyenler bildirim alanına doğrudan tüm yöneticili birimleri terfi ettirme aksiyonu eklendi.' },
    ],
  },
  {
    version: '0.4.68',
    date: '2026-09-12',
    title: '👑 Zirve (1 Numaralı Üniversite) Başarımı ve Sıralama Kontrolleri Düzeltmesi',
    items: [
      { type: 'fix', text: 'Dünya sıralamasında (#1 Zirve / THE 2024) ya da ulusal sıralamada 1. olunduğunda "👑 Zirve" başarımının açılmama sorunu giderildi.' },
      { type: 'fix', text: 'Sıralama başarımları (İlk 40, İlk 20, İlk 10, Zirve) artık hem ulusal hem de uluslararası (Dünya) sıralamanızdaki en iyi dereceyi dikkate alır.' },
      { type: 'fix', text: 'Kazanımlar sekmesine tıklandığında ve üst bar güncellemelerinde hak edilen başarımlar beklemeden anında otomatik olarak açılır ve bildirim gösterilir.' },
      { type: 'balance', text: 'Ulusal sıralamada 100 prestij eşitliği durumunda oyuncu üniversitesine birincilik önceliği tanındı.' },
      { type: 'fix', text: 'Oyun sonu kazanma denetiminde Dünya 1.liği (Zirve) resmi zafer koşulu olarak tanındı.' },
    ],
  },
  {
    version: '0.4.67',
    date: '2026-09-12',
    title: 'Fakülteler ve Kadro Panelleri Sayfa Açılış Performans Optimizasyonu',
    items: [
      { type: 'fix', text: 'Fakülteler sekmesine tıklandığında yaşanan şiddetli donma ve kasma sorunu tamamen giderildi.' },
      { type: 'fix', text: 'Kapalı <details> içindeki 280+ hocanın binlerce tablo hücresi ve DOM düğümü artık peşin üretilmiyor; hoca listeleri sadece ilgili bölüm tıklandığında anında (0.1ms) lazy olarak çiziliyor.' },
      { type: 'fix', text: 'Bölümlerdeki hoca taramaları O(D×N) yerine O(1) haritalama (Map) ile tek geçişe indirildi; gereksiz unvan ve puan döngüleri teke düşürüldü.' },
      { type: 'fix', text: 'Yüzlerce buton dinleyicisi (event listener) yerine ana panel üzerinde tekil olay temsilcisi (event delegation) kurularak bellek yükü sıfırlandı.' },
      { type: 'feat', text: 'Fakülteler sekmesine "📂 Tüm Hoca Listelerini Aç / Kapat" butonu eklendi.' },
      { type: 'fix', text: 'Bölümler sekmesinde 600+ ders için her render\'da çalışan 12.000 döngülük uzmanlık arama işlemi önbelleklenerek hızlandırıldı.' },
      { type: 'fix', text: 'Kadro sekmesi Kart görünümünde 280+ hoca için chunked render (48\'erli gruplar) getirilerek ilk açılış süresi milisaniyeler seviyesine indirildi.' },
    ],
  },
  {
    version: '0.4.66',
    date: '2026-09-12',
    title: 'Bölüm Kapasitesi ve Derslik Yönetimi İyileştirmesi',
    items: [
      { type: 'fix', text: 'Bölümler sekmesindeki kafa karıştırıcı "hoca/ders yükü kapasitesi aşıldı" yanılsaması düzeltildi; uyarı artık net olarak öğrenci mevcudu ve derslik kapasitesini (👥 X/Y Öğrenci) ifade ediyor.' },
      { type: 'fix', text: 'Bölüm kapasite hesaplaması dinamikleştirildi: Kampüste bölüme atanmış Fakülte Binası ve Amfi derslik koltukları artık bölümün resmi öğrenci kapasitesine ekleniyor (sabit 100 tavanı kaldırıldı).' },
    ],
  },
  {
    version: '0.4.65',
    date: '2026-09-12',
    title: 'Öğretim Üyesi Başvuruları: Puan Eşikli Toplu İşlem & İleri Yıl Performans Optimizasyonu',
    items: [
      { type: 'feat', text: 'Puan eşikli toplu karar desteği: Belirlenen genel puanın altındaki başvuruları tek tıkla toplu reddetme (örn. Puan < 65) ve belirlenen seviyenin üzerindekileri toplu kabul etme (örn. Puan ≥ 75) özelliği eklendi.' },
      { type: 'feat', text: 'Eşik değerleri değiştirildiğinde kabul ve ret edilecek aday sayıları dinamik olarak hesaplanarak butonlarda canlı gösterilir.' },
      { type: 'fix', text: '260+ hocalı ileri yıllarda kadro ilanlarını reddederken oluşan aşırı CPU yükü ve tarayıcı çökmesi (Aw, Snap!) tamamen giderildi.' },
      { type: 'fix', text: 'Aday reddetme işleminde yıkıcı tam sayfa yenilemesi kaldırıldı; kartlar DOM\'da yerinde ve akıcı animasyonla silinir (in-place DOM removal).' },
      { type: 'fix', text: 'Fakülte panelinin ilk yüklenmesinde tüm hoca kartlarının gereksiz yere iki kez render edilmesi (524 kart üretimi) düzeltildi; kartlar tek geçişte basılır.' },
      { type: 'fix', text: 'Her aday için tüm açık bölümlerin yüzlerce dersinin gereksiz taranması kaldırıldı; adayın yalnızca başvurduğu bölüm müfredatı taranarak 24.000 işlem sıfırlandı.' },
      { type: 'fix', text: 'Kayıt sistemi optimize edildi: seri tıklamalarda thread\'i donduran senkron derin JSON parse/stringify döngüsü yerine 350ms debounce ve tek geçişli serializeState getirildi.' },
      { type: 'fix', text: 'Üst bardaki "Dünya Sırası" göstergesinin güncellenmeme (#6 kalma) hatası düzeltildi: Sıralama artık sadece dönem geçişinde değil, canlı olarak hesaplanarak Uluslararası Sıralama sekmesiyle (%100 tutarlı) anlık senkronize edilir.' },
      { type: 'feat', text: 'Üst bardaki "Dünya Sırası" göstergesine tıklandığında doğrudan Uluslararası Sıralama (THE 2024) sekmesini açma kısayolu eklendi.' },
    ],
  },
  {
    version: '0.4.64',
    date: '2026-09-12',
    title: 'Uluslararası Sıralama (THE 2024) Paneli Baştan Sona Yenilendi',
    items: [
      { type: 'fix', text: 'Yinelenen tablolar kaldırıldı; Dünya Sıralaması (Top 50), Sıralama Komşularınız (±5) ve Türkiye Sıralaması sekmeli ve modern tek bir tabloda birleştirildi.' },
      { type: 'fix', text: 'Oyuncunun üniversitesi artık küresel sıralama tablosunda ve Türkiye liginde hak ettiği gerçek sırası ve parlayan [SEN] rozetiyle görüntüleniyor.' },
      { type: 'fix', text: 'Oyuncunun gerisinde kalan üniversitelerin sıra numaralarının güncellenmemesi (#2 oyuncu ve #2 Stanford çakışması) düzeltildi; rakiplerin sıraları dinamik olarak kaydırıldı.' },
      { type: 'fix', text: 'Sıralamadaki Komşularınız listesindeki ters sıralama hatası ve Türkiye listesindeki eksik üniversite hesabı (17/17) düzeltildi; komşularda anlık puan farkı göstergesi (+/-) eklendi.' },
    ],
  },
  {
    version: '0.4.63',
    date: '2026-09-12',
    title: 'THE Uluslararası ve Endüstri Puanı İyileştirmeleri',
    items: [
      { type: 'fix', text: 'Uluslararası puanı (International Outlook) artık yüksek üniversite saygınlığı, ABET/THEQA akreditasyonları, AB (EU) araştırma projeleri ve Konferans Merkezi seviyesini hesaba katıyor; 62 puanlık yapay tavan kaldırıldı.' },
      { type: 'fix', text: 'Endüstri puanında (Industry) Teknokent binası ve seviyesi, patent telif gelirleri, TTO anlaşmaları ve şirketleşme (spin-off) faaliyetleri tam olarak entegre edildi; 70 puanlık yapay tavan kaldırılarak 95-100 bandına yükselme imkânı sağlandı.' },
    ],
  },
  {
    version: '0.4.62',
    date: '2026-09-12',
    title: 'H-Index, Atıf ve Araştırma Puanı İyileştirmeleri',
    items: [
      { type: 'fix', text: 'H-Index ve toplam atıf hesaplama sistemi düzeltildi; akademik kadronun yayınları üzerinden H-Index artık doğru şekilde hesaplanıyor ve dönemler ilerledikçe atıf birikimi gerçekleşiyor.' },
      { type: 'fix', text: 'THE Dünya Sıralamasında Araştırma Ortamı (Research Environment) ve ulusal sıralamadaki araştırma puanının H-indeks ve aktif proje bağlantıları düzeltildi; puanlar hak edilen seviyeye yükseltildi.' },
      { type: 'feat', text: 'Araştırma panelindeki "Bölüm Araştırma Puanları" dinamik hale getirildi; statik 5 üzerinden potansiyel yerine her bölümün hoca gücü, yayın ve projelerine dayalı 100 üzerinden canlı araştırma performansı gösteriliyor.' },
    ],
  },
  {
    version: '0.4.60',
    date: '2026-09-12',
    title: 'Toplu Kadro İlanı Verme Sistemi',
    items: [
      { type: 'feat', text: 'Kadro İlanı Ver ekranına Tek Bölüm / Toplu İlan modu eklendi. Aynı unvan, maaş, araştırma fonu ve lab imkanlarıyla birden fazla bölüm seçilerek tek tıkla toplu ilan verilebiliyor.' },
    ],
  },
  {
    version: '0.4.59',
    date: '2026-09-12',
    title: 'Yerleşke Akordeon Düzeni ve THE Sıralama İyileştirmeleri',
    items: [
      { type: 'feat', text: 'Yerleşke sekmesindeki tüm binalar ve inşaat seçenekleri kategori bazlı açılır-kapanır akordeon listesi haline getirildi. Her bina tipine tıklandığında mevcut binalar ve en altta "Bir Tane Daha İnşa Et" seçeneği tek bir akışta listeleniyor.' },
      { type: 'fix', text: 'Endüstri (Industry) puanında TTO durumu ve özel sektör (isPrivateSector) projeleri düzeltildi; TTO kurulması, seviye yükseltilmesi ve sanayi projeleri artık Endüstri puanına tam yansıyor.' },
      { type: 'fix', text: 'Uluslararası (International) puanında prestijli yurt dışı doktoralı hocalar ve Uluslararası İlişkiler Ofisi idari birimi geliştirmeleri hesaba katılarak skorun doğru yükselmesi sağlandı.' },
    ],
  },
  {
    version: '0.4.50',
    date: '2026-05-09',
    title: 'Müfredat zorluğu artık oyuncu kontrolünde',
    items: [
      { type: 'feat', text: 'Bölüm müfredatındaki her dersin zorluk seviyesini (1-5) artık oyuncu ayarlayabilir. Sert müfredat - nitelikli mezun + prestij yükselişi, ama öğrenci memnuniyeti düşer ve geçme oranı azalır. Yumuşak müfredat - mutlu öğrenci ama uzun vadede mezun kalitesi ve prestij düşer. Bölüm Ayrıntıları > Müfredat sekmesinde slider olarak görünür, geçme oranı ve not ortalaması canlı güncellenir (R-Fatih önerisi, Issue #8 - Katman 1).' },
    ],
  },
  {
    version: '0.4.49',
    date: '2026-05-09',
    title: 'Dönem ortası kayıt ve BAP kalıcılığı',
    items: [
      { type: 'fix', text: 'Her başarılı aksiyon (hoca alma, idari personel, bina inşaatı, bütçe, BAP onayı, kulüp/takım, akreditasyon vb.) artık otomatik olarak kaydediliyor. Dönem ortasında sayfa yenilenirse hiçbir eylem kaybolmaz (Issue #14 — meri-png).' },
      { type: 'fix', text: 'BAP çağrısı artık açıldıktan sonra 3 dönem boyunca aktif kalıyor; bir sonraki turda koşulsuz kapanmıyordu. Araştırma panelinde "X dönem sonra kapanır" göstergesi eklendi. Tüm başvurular işlenince veya süre dolunca kapanır (Issue #14 — meri-png).' },
    ],
  },
  {
    version: '0.4.48',
    date: '2026-05-09',
    title: 'Oyun sonu kararlılığı ve Vakıf Kurtarma borç sistemi',
    items: [
      { type: 'fix', text: 'Vakıf Kurtarma senaryosundaki 40 milyon borç artık kredi sistemi üzerinden işleniyor. "Önceki Yönetimden Devralınan" başlıklı kredi olarak görünür, taksit ödemeleri Finansal Durum ekranında takip edilebilir. Eski kayıtlar da otomatik olarak düzeltilir.' },
      { type: 'fix', text: 'Kayıt yüklendiğinde biriken düşük öğrenci sayacı ve iflas sayacı sıfırlanıyor. Uzun süre oynandıktan sonra kaydedilen ve sonra yüklenen oyunlarda anlık iflas/kapanma tetiklenme sorunu giderildi (Issue #13, Issue #16).' },
      { type: 'fix', text: 'Oyun bittiğinde veya kazanıldığında "Sonraki Dönem" butonu artık devre dışı kalır ve "Yeni Oyuna Başla" olarak değişir. Ekranda kalıcı bir bilgi bandı çıkar. Butona basılınca menüye yönlendirilirsiniz (Issue #16).' },
      { type: 'fix', text: 'Düşük öğrenci sayısı nedeniyle kapanma mesajındaki "%40" ifadesi "%25" olarak düzeltildi; kod zaten bu eşiği kullanıyordu.' },
    ],
  },
  {
    version: '0.4.47',
    date: '2026-05-09',
    title: 'Deneyim seviyesi etiketleri tam Türkçe',
    items: [
      { type: 'fix', text: 'İdari personel işe alma ekranındaki deneyim seviyesi seçenekleri tam Türkçeleştirildi: "Junior aday", "Mid-level aday", "Senior aday" yerine artık "Giriş seviye aday", "Orta düzey aday", "Kıdemli aday" görünür. Kayıt uyumluluğu korundu.' },
    ],
  },
  {
    version: '0.4.46',
    date: '2026-05-09',
    title: 'İdari personel: kişi-rütbe ayrımı, esnek işe alım, terfi öne çıktı',
    items: [
      { type: 'feat', text: 'İdari personel alımında artık kişiyi istediğiniz rütbeye yerleştirebilirsiniz. Aday üretildiğinde sabit rütbeye kilitli değil; her adayın yanında rütbe seçimi mevcut. Senior bir adayı Müdür yaparsınız, Junior\'ı Memur olarak alırsınız - aynı kişi farklı kademelerde işe alınabilir (EfekanSalman raporu, Issue #15).' },
      { type: 'feat', text: 'Üst combobox artık "Memur/Uzman/Şef" yerine deneyim seviyesi seçer (Junior, Mid-level, Senior). Adayların yetkinlik istatistikleri seçilen seviyeye göre değişir; Senior adayların liderlik ve deneyim statları belirgin yüksek.' },
      { type: 'feat', text: 'Aday için önerilen rütbenin üzerinde veya altında bir rütbe seçerseniz uyarı çıkar (memnuniyet ve sadakat etkisi olur). Önerinin üzerinde: zorlanma, maaş baremi yetersiz olabilir. Altında: kişi vasıflı işine alttan başlamış hisseder.' },
      { type: 'feat', text: 'Terfi bekleyen personel artık daha görünür: kart kenarında altın çerçeve, panel başında "Terfi Bekleyen: X" rozeti. Mevcut bir Memur\'u zaman içinde Müdür\'e kadar terfi ettirebilirsiniz.' },
    ],
  },
  {
    version: '0.4.42',
    date: '2026-05-07',
    title: 'Liderlik tablosunda Sıralama sütunu Dünya Sırası oldu',
    items: [
      { type: 'feat', text: 'Liderlik tablosunda "Sıralama" sütunu artık Dünya Sırası (THE WUR 2024). Yeni gönderimler 1-1904 arası gerçek dünya konumunu gösterir; eski 50 hayali rakipten kalma kayıtlar "Eski TR" rozetiyle ayırt edilir.' },
      { type: 'fix', text: 'Liderlik tablosunda kayıtlı sıra üst sınırı 1000\'den 5000\'e çıkarıldı (gelecekteki büyük listeler için pay).' },
    ],
  },
  {
    version: '0.4.41',
    date: '2026-05-07',
    title: 'Liderlik tablosu temizliği ve kötüye kullanan hesap engellendi',
    items: [
      { type: 'security', text: 'Eski sürüm sınırlarını kötüye kullanan bir hesap engellendi; ilgili kayıt liderlik tablosundan kaldırıldı.' },
    ],
  },
  {
    version: '0.4.40',
    date: '2026-05-07',
    title: 'Eski "Sıralama" sekmesi kaldırıldı, Dünya Sırası tek doğruluk kaynağı',
    items: [
      { type: 'fix', text: 'Eski TR sıralaması (50 hayali rakip) sekmesi kaldırıldı; oyuncunun gerçek konumu için Dünya Sırası kullanılıyor — iki sıralamanın çelişme sorunu giderildi.' },
      { type: 'fix', text: 'Üst stat barında "Sıralama #50" yerine THE WUR 2024 dünya sırası gösteriliyor.' },
      { type: 'fix', text: 'Saygınlık kartındaki sıralama notu da dünya sırasını gösteriyor.' },
    ],
  },
  {
    version: '0.4.39',
    date: '2026-05-06',
    title: 'Uluslararası sıralama sistemi (THE 2024)',
    items: [
      { type: 'feat', text: 'Uluslararası Sıralama paneli eklendi: THE WUR 2024 verisinden 1900+ üniversite, oyuncunun dünyadaki sırası, ülke filtresi, Türk üniversiteleriyle karşılaştırma.' },
      { type: 'feat', text: 'Atıf etkisi modeli: yayın skoru artık sırf miktara değil, hoca kalitesi ve uluslararası işbirliği oranına da bağlı (log ölçek, doyum noktası var).' },
      { type: 'feat', text: 'Beş pillar skoru THE metodolojisini taklit eder: Eğitim (%29.5), Araştırma Ortamı (%29), Atıflar (%30), Uluslararasılık (%7.5), Endüstri (%4).' },
      { type: 'fix', text: 'Mevcut TR sıralaması artık dünya sıralamasındaki Türk üniversiteleri referansıyla tutarlı (oyuncu Sabancı seviyesine ulaşırsa TR\'de de yukarı çıkar).' },
    ],
  },
  {
    version: '0.4.38',
    date: '2026-05-06',
    title: 'Çevre + Gıda Müh. eklendi, Yazılım Müh. fakülte eşleşmesi, idari rütbe ve uluslararası puan düzeltildi',
    items: [
      { type: 'feat',  text: 'Çevre Mühendisliği bölümü tam veri ile eklendi: 8 ders müfredatı (Su/Hava Kirliliği, Katı Atık, Çevre Kimyası vb.) + 7 uzmanlık alanı — İdris Demirsoy raporu.' },
      { type: 'feat',  text: 'Gıda Mühendisliği bölümü tam veri ile eklendi: 8 ders müfredatı (Gıda Kimyası, Mikrobiyoloji, İşleme Teknolojileri vb.) + 7 uzmanlık alanı — İdris Demirsoy raporu.' },
      { type: 'fix',   text: 'Yazılım Mühendisliği fakülteler ekranında listelenmiyordu; Mühendislik Fakültesi bölüm listesine eksik eşleşme eklendi — İdris Demirsoy raporu.' },
      { type: 'fix',   text: 'İdari personel alımında "Yenile" tuşu seçili rütbeyi sıfırlayıp "Memur\'a" dönüyordu; artık seçili rütbe korunur — İdris Demirsoy raporu.' },
      { type: 'fix',   text: 'Uluslararası puan (internationalization) oyun boyunca başlangıç değeri olan 10\'da takılı kalıyordu; artık her dönem yeniden hesaplanıp state\'e yazılıyor — İdris Demirsoy raporu.' },
    ],
  },
  {
    version: '0.4.37',
    date: '2026-05-06',
    title: 'İç tutarlılık iyileştirmeleri',
    items: [
      { type: 'security', text: 'Skor sistemi ve sunucu doğrulamaları sıkılaştırıldı.' },
      { type: 'security', text: 'Bot/script korumaları yeni katmanlarla güçlendirildi.' },
    ],
  },
  {
    version: '0.4.36',
    date: '2026-05-06',
    title: 'Köklü Devlet Üniversitesi senaryosu daha gerçekçi: 6 → 12 bölüm',
    items: [
      { type: 'balance', text: 'Köklü Devlet Üniversitesi senaryosu 50 yıllık geçmişe sahip olmasına rağmen yalnızca 6 bölümle başlıyordu — gerçek bir orta ölçekli devlet üniversitesi için yetersizdi (Âli Teslazadegil raporu). Senaryo artık 12 bölümle başlıyor: mevcut bilgisayar/elektrik-elektronik/makine/işletme/iktisat/hukuk üzerine inşaat, fizik, kimya, matematik, mimarlık ve psikoloji eklendi (mühendislik + temel bilimler + sosyal bilimler kapsaması). Başlangıç saygınlığı 45 → 55 yükseltildi. Eski yük borç 15M → 25M (daha fazla bölüm = daha fazla bürokratik miras). Yeni Kurulan ve Vakıf Kurtarma senaryolarına dokunulmadı (3 bölüm onların kavramına uygun).' },
    ],
  },
  {
    version: '0.4.35',
    date: '2026-05-06',
    title: 'Bölüm açma listesi genişletildi + bellek sızıntısı giderildi + BAP askıda kalma düzeltildi',
    items: [
      { type: 'fix', text: 'Bölüm açma listesi 25 bölümün tamamını kapsayacak şekilde genişletildi (önceden 14\'tü; fizik, kimya, matematik, biyoloji, hukuk, psikoloji, hemşirelik gibi bölümler UI\'dan görünmüyordu) — Muhammed Enes Canöz raporu.' },
      { type: 'fix', text: 'Uzun oyunlarda performans iyileştirmesi: mezun listesi (state.alumni) ve tamamlanmış proje listesi otomatik budanır — yıldız mezunlar (bağış yapanlar/notable tipi) korunur, sıradan mezunların son 20 kohortu (~10 yıl) tutulur. 3. yıldan sonra sayfa yenileme zorunluluğu giderildi — Muhammed Enes Canöz raporu.' },
      { type: 'fix', text: 'BAP çağrısı: tüm başvurular reddedildiğinde veya dönem sonunda otomatik kapanır (önceden askıda kalıp yeni ilan açmayı engelliyordu) — Muhammed Enes Canöz raporu.' },
    ],
  },
  {
    version: '0.4.34',
    date: '2026-05-05',
    title: 'Sıralama hesabı çalışmıyordu — herkes 50. sırada görünüyordu',
    items: [
      { type: 'fix', text: 'Üniversite sıralaması (state.university.ranking) başlangıç değeri olan 50\'den hiç değişmiyordu — leaderboard tablosunda tüm gerçek oyuncuların "rank" alanı 50 gözüküyordu. Kök neden: `updateRankings()` fonksiyonu yazılmıştı ama `nextTurn()` akışında hiçbir yerden çağrılmıyordu. Artık her dönem sonunda rakip AI hamlesinden hemen sonra tüm üniversiteler (oyuncu + 50+ rakip) prestige\'e göre sıralanıp `state.university.ranking` güncelleniyor. Skor hesabındaki sıralama bonusu (max +250 puan) artık gerçek performansı yansıtıyor; oyuncu yeterince prestij kazanırsa Boğaziçi Teknik gibi rakipleri geçip ilk sıralara yükselebilir. Kayıt yüklendikten sonra ilk dönemde otomatik yeniden hesaplanır.' },
    ],
  },
  {
    version: '0.4.33',
    date: '2026-05-04',
    title: 'Mobilde modal arka plan kayıyordu + bölüm başvuru butonu UX',
    items: [
      { type: 'fix', text: 'Mobilde herhangi bir modal (kontenjan, bölüm başvuru, vb.) açıkken arka plan sayfası da kayıyor, içerikler üst üste biniyordu — modal açıkken oyun kullanılamaz hale geliyordu (Lafontane6 raporu, "mobilden oynayamadım"). Modal açılınca `body` scroll\'u kilitleniyor, sadece modal içeriği kaydırılabiliyor. Modal kapanınca sayfa kilidi açılıyor.' },
      { type: 'feat', text: 'Yeni Bölüm Program Başvurusu ekranında bölüm için zaten bekleyen YÖK başvurusu varsa "Başvur" butonu yerine "✅ Başvuruldu (X dönem)" disabled buton gösteriliyor — kullanıcı tıklamadan durumu görebiliyor (Issue #6, R-Fatih). Eskiden butona basınca toast mesajı çıkıyordu.' },
    ],
  },
  {
    version: '0.4.32',
    date: '2026-05-04',
    title: 'Bina upgrade sırasında kapasite kayboluyor + dönem başlatılamıyor',
    items: [
      { type: 'fix', text: 'Bir fakülte binasına tüm bölümleri atayıp upgrade yaptıktan sonra kontenjan modal\'da "Yeni Alım İçin Yer: 0" görünüyor, dönem başlatılamıyordu (Can GULDOGAN raporu). Kök neden: upgrade başlayınca `isCompleted` false yapılıyor, kapasite hesaplarında bina düşürülüyordu — tek fakülte binası varsa toplam kapasite 0\'a düşüyordu. Artık upgrade boyunca bina aktif kalıyor (eski kapasite kullanılabiliyor); upgrade ilerlemesi `status === \'upgrading\'` ile takip ediliyor. State migration eski bozuk kayıtları da düzeltiyor — sayfa yenileme yeterli.' },
    ],
  },
  {
    version: '0.4.31',
    date: '2026-05-04',
    title: 'Mekatronik, Mimarlık, Güzel Sanatlar bölümleri tam veri ile destekleniyor',
    items: [
      { type: 'fix', text: 'Mekatronik Mühendisliği, Mimarlık ve Güzel Sanatlar bölümleri açılabiliyordu ama bölüm tanımı, ders müfredatı ve uzmanlık alanları eksikti — hoca alımında "ders örtüşmesi yok" uyarısı çıkıp uyum hep düşük kalıyordu (Erdinç raporu — daha önce İletişim ve Siyaset Bilimi için yapılan fix\'in aynısı). Üç bölüm artık tam veri ile destekleniyor: her biri için 8 ders müfredatı + 7-8 uzmanlık alanı. Mekatronik için: Mekatronik, Mekanik Sistemler, Devre Tasarımı, Mikrodenetleyiciler, Otomatik Kontrol, Robotik, Hidrolik-Pnömatik, Endüstriyel Otomasyon. Mimarlık için: Mimari Tasarım, Mimarlık Tarihi, Yapı Teknolojileri, Şehir Planlama, İç Mimari, Sürdürülebilir Mimari, Restorasyon. Güzel Sanatlar için: Resim, Heykel, Grafik Tasarım, Sanat Tarihi, Fotoğraf, Görsel Sanatlar, Çağdaş Sanat.' },
    ],
  },
  {
    version: '0.4.30',
    date: '2026-05-04',
    title: 'Birden fazla kütüphane inşa edilebilir',
    items: [
      { type: 'fix', text: 'Kütüphane kullanım sınırına ulaştığında ikinci bir kütüphane inşa edilemiyordu (Erdinç raporu). Spor tesisi (v0.4.20) ile aynı düzeltme uygulandı: `canHaveMultiple` artık true. Mevcut kütüphane tamamlandıktan sonra yenisi başlatılabilir.' },
    ],
  },
  {
    version: '0.4.29',
    date: '2026-05-04',
    title: 'Sonradan açılan bölümlere öğrenci yerleşmiyor + fakülteler ekranında görünmüyor',
    items: [
      { type: 'fix', text: 'Oyunun başında açılmayıp sonradan YÖK onayı ile eklenen bölümlere — müfredat ve hocası olsa bile — öğrenci yerleşmiyordu (R-Fatih Issue #10). Kök neden: bölüm açıldığında `students.byDepartment[deptId]` yapısı kurulmuyordu, `processNewEnrollment` bu eksiklik nedeniyle bölümü atlıyordu. Artık YÖK onayı geldiğinde 4 yıllık öğrenci yapısı (year1-4) hemen oluşturuluyor.' },
      { type: 'fix', text: 'Sonradan açılan 3. bir bölüm fakülteler ekranında listelenmiyordu, bu yüzden bölüm başkanı atanamıyordu (Emir raporu). YÖK onayı sonrası `state.fakulteler[faculty].departments` push\'u duplicate kontrolü ile düzeltildi.' },
      { type: 'fix', text: 'Eski kayıtlar için iki katmanlı güvenlik: (1) state migration sırasında her açık bölüm için byDepartment + fakulteler tutarlılığı kontrol edilip eksikse otomatik tamamlanıyor; (2) processNewEnrollment içinde lazy init defansif katmanı. Bu sayede mevcut oyuncuların bozuk kayıtları sayfayı yenilediklerinde otomatik düzeliyor.' },
    ],
  },
  {
    version: '0.4.28',
    date: '2026-05-04',
    title: 'Oyun bitti/kazanıldı sonrası boş dönem özeti açılması düzeltildi',
    items: [
      { type: 'fix', text: 'Oyun kazanıldıktan veya bittikten sonra "Sonraki Dönem"e basıldığında boş bir Dönem Özeti modal\'ı açılıyor; tüm değerler 0 veya — gözüküyordu (Emir raporu, console log ile teşhis edildi). Backend zaten "Oyun zaten bitti" dönüyordu ama UI yine de modal açıyordu. Artık iki katmanlı korunuyor: handler en başta gameOver/gameWon kontrol edip "🏆 Oyun kazanıldı. Yeni oyun başlatabilirsin." bildirimi veriyor; ek güvenlik ağı olarak da nextTurn() sonrası yine kontrol ediliyor.' },
      { type: 'fix', text: 'main.js içindeki save.js cache-bust sürümü 0.4.24\'te kalmış (her sürümde otomatik bumplanmıyor). 0.4.28\'e güncellendi — eski tarayıcı önbelleklerinin save modülünü zorla yenilemesi sağlandı.' },
    ],
  },
  {
    version: '0.4.27',
    date: '2026-05-04',
    title: 'Skor tablosunda kullanıcı başına yalnızca en iyi skor',
    items: [
      { type: 'feat', text: 'Önceden bir kullanıcı birden fazla oyun bitirince skor tablosunda birden çok kaydı oluşuyordu (R-Fatih önerisi). Artık kullanıcı başına yalnızca en iyi skor tutuluyor: yeni oyun mevcuttan yüksek skor üretirse kayıt güncelleniyor, düşük olunca atlanıyor — modal "📊 X puan aldın. Küresel en iyi skorun Y — leaderboard güncellenmedi." der.' },
      { type: 'security', text: 'Firestore Security Rules güncellendi: doc id artık `uid` (kullanıcı başına tek belge), update yalnızca yeni skor mevcuttan yüksek olunca kabul ediliyor (server-side). İstemci tarafı bypass edilse bile sunucu reddediyor.' },
    ],
  },
  {
    version: '0.4.26',
    date: '2026-05-04',
    title: 'Siyaset Bilimi bölümü tam veri ile destekleniyor',
    items: [
      { type: 'fix', text: 'Siyaset Bilimi bölümü açılabiliyordu ama bölüm tanımı, ders müfredatı ve uzmanlık alanları eksikti — bölüm açıldıktan sonra hoca/öğrenci akışı düşük uyumda kalıyordu (seyrekilyas09 raporu, Issue #5). Bölüm artık tam veri ile destekleniyor: 8 ders müfredatı, 7 uzmanlık alanı (Siyaset Teorisi, Siyasi Düşünce, Karşılaştırmalı Siyaset, Türk Siyasal Hayatı, Uluslararası İlişkiler, Kamu Yönetimi, Siyaset Sosyolojisi).' },
    ],
  },
  {
    version: '0.4.25',
    date: '2026-05-04',
    title: 'İletişim bölümü tam veri ile destekleniyor',
    items: [
      { type: 'fix', text: 'İletişim bölümü açılabiliyordu ama bölüm tanımı, ders müfredatı ve uzmanlık alanları eksikti. Bu yüzden hoca alımında "mevcut müfredatla ders örtüşmesi yok" uyarısı çıkıp uyum hep düşük kalıyordu (Erdinç raporu). Bölüm artık tam veri ile destekleniyor: 8 ders müfredatı, 7 uzmanlık alanı (Gazetecilik, Halkla İlişkiler, Reklam, Radyo-TV, Yeni Medya, İletişim Tasarımı, Medya Çalışmaları).' },
    ],
  },
  {
    version: '0.4.24',
    date: '2026-05-04',
    title: 'Ulaşım merkezi, idari bina ve araştırma merkezi etkin',
    items: [
      { type: 'fix', text: 'Ulaşım merkezi binası kuruluyordu ama memnuniyete hiçbir etkisi yoktu (Erdinç raporu). Artık inşa edildiğinde "Ulaşım" memnuniyet skorunu artırıyor; her seviye yükseldiğinde etki büyüyor.' },
      { type: 'fix', text: 'İdari bina memnuniyet bonusu da hesaba bağlanmamıştı. Artık idari hizmetler memnuniyetine doğrudan katkıda bulunuyor.' },
      { type: 'feat', text: 'Araştırma merkezi artık "Bölüm Ata" ile etkin: atanan bölümün hocalarına araştırma çağrısı başarı şansında %15 bonus uygulanıyor (Erdinç raporu, "yakında" beklemesi sona erdi).' },
    ],
  },
  {
    version: '0.4.23',
    date: '2026-05-04',
    title: 'Akreditasyon erken yenileme düzeltildi',
    items: [
      { type: 'fix', text: 'Akreditasyon süresi yaklaştığında "Yenile" butonu görünüyordu ama tıklayınca "akreditasyon zaten mevcut" hatası alınıyordu (Erdinç raporu). Son 2 dönem kala erken yenileme artık kabul ediliyor; renewal maliyeti ile yeni başvuru başlatılıyor.' },
    ],
  },
  {
    version: '0.4.22',
    date: '2026-05-04',
    title: 'MÜDEK ve idari ekranda öğrenci memnuniyeti yanlış görünüyordu',
    items: [
      { type: 'fix', text: 'Ana ekranda öğrenci memnuniyeti 100 görünüp MÜDEK akreditasyon başvurusunda 50 olarak görünmesi nedeniyle başvuru reddediliyordu (AkaDemi raporu). Aynı sorun idari/bölüm ekranında da vardı (Emir raporu). Bölüm bazlı memnuniyet sayısı tutulmuyorsa genel öğrenci memnuniyetine göre değerlendirilecek.' },
    ],
  },
  {
    version: '0.4.21',
    date: '2026-05-04',
    title: 'Yazılım Mühendisliği bölümü tamamlandı + İdari bina detayı',
    items: [
      { type: 'fix', text: 'Yazılım Mühendisliği bölümü açılabiliyordu ama bölüm tanımı, ders müfredatı ve uzmanlık alanı eksikti. Bu yüzden bölüm açıldıktan sonra hoca/öğrenci alınamıyordu (Erdinç raporu). Bölüm artık tam veri ile destekleniyor: 8 ders müfredatı, 7 uzmanlık alanı.' },
      { type: 'fix', text: 'İdari binanın ofis kapasitesi ve idari personel doluluğu yerleşke kartında görünmüyordu (Erdinç raporu). Yeni özel kart: ofis sayısı, mevcut idari personel, doluluk oranı, bir üst düzeyin kapasitesi.' },
    ],
  },
  {
    version: '0.4.20',
    date: '2026-05-04',
    title: 'Birden fazla spor tesisi inşa edilebilir',
    items: [
      { type: 'fix', text: 'Spor tesisi tek tek yapılabiliyordu, yenisi reddediliyordu (AkaDemi raporu). Artık birden fazla spor tesisi inşa edilebilir; mevcut tesis tamamlandıktan sonra yenisi başlatılabilir.' },
    ],
  },
  {
    version: '0.4.19',
    date: '2026-05-04',
    title: 'Memnuniyet sayısı + spor beraberliği',
    items: [
      { type: 'fix', text: 'Genel Öğrenci Memnuniyeti "63.9000000" gibi uzun ondalıklı görünüyordu (R-Fatih raporu, Issue #7). Ekrandaki tüm memnuniyet sayıları artık tam sayıya yuvarlanıyor.' },
      { type: 'fix', text: 'Basketbol ve voleybolda beraberlik gösteriliyordu, gerçekte bu sporlarda beraberlik yok (R-Fatih raporu, Issue #9). Spor başına "beraberlik var mı" alanı eklendi; basketbol/voleybol/yüzme/atletizm/e-spor için yakın sonuçlar artık galibiyet/mağlubiyetle sonuçlanıyor. Sezon sonu kayıt formatı da uyarlandı.' },
    ],
  },
  {
    version: '0.4.18',
    date: '2026-05-03',
    title: 'Dönemlik harç slider\'ı kayıt yapmıyordu',
    items: [
      { type: 'fix', text: 'Harç slider\'ında değer değiştiriyordunuz ama state\'e kaydedilmiyordu (Burak Gökalp raporu). Slider\'ı bıraktığınız anda harç artık kayıt ediliyor ve onay bildirimi geliyor. Aynı düzeltme financial aid (Co-op tipi) için de yapıldı.' },
    ],
  },
  {
    version: '0.4.17',
    date: '2026-05-03',
    title: '"Bahar undefined" sorunu için son katman koruma',
    items: [
      { type: 'fix', text: 'Bazı oyuncular "Dönem Özeti — Bahar undefined" başlığını hâlâ görüyordu (Erdinç + Burak Gökalp raporları). Kayıt yüklenirken oyun yıl/dönem alanları eksik gelirse otomatik düzeltiliyor (yıl 1, dönem güz olarak başlatılıyor).' },
      { type: 'fix', text: 'Tarayıcıların eski HTML\'i önbellekten yüklemesini engellemek için sayfa başlığına önbellek başlıkları eklendi. Yeni sürümler artık daha güvenilir biçimde tarayıcılara ulaşacak.' },
    ],
  },
  {
    version: '0.4.16',
    date: '2026-05-03',
    title: 'Bütçe dağılımı uygulanmıyor sorunu düzeltildi',
    items: [
      { type: 'fix', text: 'Bütçe Dağılımı ekranında slider\'larla yüzde değiştirip "Dağılımı Uygula"ya basınca eski değere dönüyordu, kayıt yapılmıyordu (Yusuf Sertkaya raporu). Karar gönderiminde aksiyon adı yanlıştı; düzeltildi. Artık dağılım anında uygulanıyor.' },
    ],
  },
  {
    version: '0.4.14',
    date: '2026-05-03',
    title: 'App Check (reCAPTCHA v3) altyapısı eklendi',
    items: [
      { type: 'security', text: 'Bot ve betiklere karşı koruma için App Check (reCAPTCHA v3) entegrasyonu kondu. Site anahtarı yapılandırılınca etkinleşir; tarayıcı dışından gönderilen sahte istekler reddedilecek. Oyuncu için görünmez (görünür bir doğrulama yok).' },
    ],
  },
  {
    version: '0.4.13',
    date: '2026-05-03',
    title: 'Eski oyun kayıtlarına da mükerrer skor koruması',
    items: [
      { type: 'fix', text: 'v0.4.12 öncesi başlamış oyun kayıtlarında oyun kimliği bulunmuyordu; bu kayıtlardan skor gönderildiğinde mükerrer kayıt önleme tetiklenmiyordu. Artık kayıt yüklenirken eksik kimlik otomatik tamamlanıyor.' },
    ],
  },
  {
    version: '0.4.12',
    date: '2026-05-03',
    title: 'Mükerrer skor kaydı engellendi (hem oyun içinde hem sunucuda)',
    items: [
      { type: 'fix', text: 'Bir oyundan birden fazla kez skor gönderilebiliyor, sıralama bozuluyordu (R-Fatih raporu). Oyun içinde gönderildi bayrağı tutuldu; modal ikinci açılışta gönderim bilgisini gösterip yeni kayda izin vermiyor.' },
      { type: 'security', text: 'Sunucu tarafı koruma da eklendi (serhattural geri bildirimi): her skor için "kullanıcı + oyun kimliği" benzersiz belge kimliği kullanılıyor. Tarayıcı tarafındaki kontrol atlatılsa bile aynı oyundan ikinci kayıt sunucuda reddediliyor.' },
      { type: 'security', text: 'Sunucu yetkilendirme kuralları (firestore.rules) yazıldı: skor alanı 0–100.000, yıl 1–200, isim 1–30 karakter aralığında olmak zorunda. Ayrıca tarih sunucu zamanından alınıyor; istemci kendi tarihini yazamıyor.' },
    ],
  },
  {
    version: '0.4.11',
    date: '2026-05-03',
    title: 'Kadroda yanlış hoca açılması düzeltildi',
    items: [
      { type: 'fix', text: 'Bir hocaya tıklayınca başka bir hocanın profili açılıyordu (Emir/X raporu). Sebep: kayıt yüklendikten sonra yeni gelen adaylara mevcut hocalarla aynı kimlik veriliyordu. Hem yeni kimlikler artık çakışmaz hale getirildi hem de eski kayıtlardaki yinelenen kimlikler yükleme sırasında otomatik düzeltiliyor.' },
    ],
  },
  {
    version: '0.4.10',
    date: '2026-05-03',
    title: 'Dönem geçiş takılması ve erken kapanma düzeltmeleri',
    items: [
      { type: 'fix', text: '"Sonraki Dönem"e basıldığında oyun ilerlemiyor, sayfayı kapatıp açmak gerekiyordu. Simülasyonda hata olunca state önceki döneme geri alınıyor ve net bir uyarı gösteriliyor. Sayfa yenilemeye gerek kalmadı.' },
      { type: 'balance', text: 'Yeni kurulan üniversitelerde ilk 6 dönem (3 yıl) "öğrenci az" oyun bitti kontrolüne tabi olmayacak. Ayrıca eşik %40\'tan %25\'e, üst üste düşük dönem sayısı 3\'ten 6\'ya çekildi: kuruluş döneminde yanlışlıkla "üniversite kapandı" çıkmıyor.' },
      { type: 'fix', text: 'Kayıt yüklendikten sonra eski "oyun bitti" bayrağı bazen kalıcı kalıyordu. Yükleme sırasında temizleniyor.' },
    ],
  },
  {
    version: '0.4.9',
    date: '2026-05-03',
    title: 'Sürüm notları Türkçeleştirildi',
    items: [
      { type: 'fix', text: 'Yenilikler panelindeki ifadeler Türkçeleştirildi: önbellek, geri ödeme planı, kaydırma, yan menü, gezinme gibi karşılıklar kullanıldı.' },
    ],
  },
  {
    version: '0.4.8',
    date: '2026-05-03',
    title: 'Sürüm notları paneli eklendi',
    items: [
      { type: 'feat', text: 'Ana menüye "Yenilikler" düğmesi eklendi. Yeni sürüm yüklenince bu pencere kendiliğinden açılır.' },
    ],
  },
  {
    version: '0.4.7',
    date: '2026-05-03',
    title: 'Banka kredisi açığının kapatılması',
    items: [
      { type: 'balance', text: 'Kredinin geri ödeme planı hatalıydı: taksitin içindeki faiz de anaparadan düşülüyordu. Yeni kredi çekip eskiyi kapatarak faizden kaçma açığı kapatıldı. Artık her dönem gerçek faiz ödeniyor.' },
      { type: 'balance', text: 'Erken kredi kapatma için %5 erken kapatma cezası eklendi.' },
    ],
  },
  {
    version: '0.4.6',
    date: '2026-05-03',
    title: 'Çevrimiçi skor tablosu çalışır hale geldi',
    items: [
      { type: 'fix', text: 'Yapılandırma anahtarındaki tek karakterlik yazım hatası nedeniyle skorlar çevrimiçi tabloya yazılamıyordu. Düzeltildi.' },
    ],
  },
  {
    version: '0.4.5',
    date: '2026-05-03',
    title: 'Skor gönderme hata iletileri sadeleştirildi',
    items: [
      { type: 'fix', text: 'Skor sunucusuna ulaşılamadığında ham hata kodu gösterilmesi yerine "skor yerel olarak yedeklendi" bildirimi gösteriliyor.' },
    ],
  },
  {
    version: '0.4.4',
    date: '2026-05-03',
    title: 'Önbellek ve Co-op üniversite düzeltmeleri',
    items: [
      { type: 'fix', text: 'Tarayıcılar eski kod dosyalarını önbellekten yüklediği için "Bahar undefined" gibi düzeltilmiş yazılar yeniden görünüyordu. Tüm kod dosyaları artık sürüm etiketli yükleniyor.' },
      { type: 'fix', text: 'Co-op Üniversitesi seçilince "Bilinmeyen üniversite tipi" hatası alınıyordu. Düzeltildi.' },
    ],
  },
  {
    version: '0.4.3',
    date: '2026-05-03',
    title: 'Mobil uyumluluk ve bölüm seçimi iyileştirmesi',
    items: [
      { type: 'feat', text: 'Mobil cihaz uyumluluğu eklendi: kaydırma açıldı, yan menü alt gezinme çubuğu olarak konumlandı, düğmeler 44 piksel dokunma hedefine uyduruldu.' },
      { type: 'fix', text: 'Bölüm seçim sınırı netleştirildi. Senaryoya göre en fazla seçilebilecek bölüm sayısı uyarı kutusunda gösteriliyor.' },
      { type: 'fix', text: 'Dönem sonu özet penceresinde "Bahar undefined" başlığı düzeltildi.' },
      { type: 'fix', text: 'Skor gönderimi geçersiz veya eksik alanlara karşı korunaklı hale getirildi.' },
    ],
  },
];

const _SEEN_KEY = 'rektor_oldum_last_seen_version';

export function getLastSeenVersion() {
  try {
    return localStorage.getItem(_SEEN_KEY) || null;
  } catch {
    return null;
  }
}

export function setLastSeenVersion(v) {
  try {
    localStorage.setItem(_SEEN_KEY, v);
  } catch { /* yerel depo yazılamadı */ }
}

export function hasUnseenChanges(currentVersion) {
  const seen = getLastSeenVersion();
  if (!seen) return true;                  // ilk ziyaret
  return seen !== currentVersion;          // sürüm değiştiyse göster
}
