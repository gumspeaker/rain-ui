import React, { useState } from 'react';
import { Loading, Button } from 'raind';
import '../style/demo.less';
import { Alert } from 'antd';
const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setLoading((v) => !v);
        }}
      >
        {loading ? '关闭' : '开启'}loading
      </Button>
      <Loading tip="加载中..." loading={loading}>
        <Alert
          message="髣髴兮若轻云之蔽月，飘飖兮若流风之回雪"
          description="其形也，翩若惊鸿，婉若游龙。荣曜秋菊，华茂春松。髣髴兮若轻云之蔽月，飘飖兮若流风之回雪。远而望之，皎若太阳升朝霞；迫而察之，灼若芙蕖出渌波。秾纤得衷，修短合度。肩若削成，腰如约素。延颈秀项，皓质呈露。芳泽无加，铅华弗御。云髻峨峨，修眉联娟。丹唇外朗，皓齿内鲜。明眸善睐，靥辅承权。瓌姿艳逸，仪静体闲。柔情绰态，媚于语言。奇服旷世，骨像应图。披罗衣之璀粲兮，珥瑶碧之华琚。戴金翠之首饰，缀明珠以耀躯。践远游之文履，曳雾绡之轻裾。微幽兰之芳蔼兮，步踟蹰于山隅。于是忽焉纵体，以遨以嬉。左倚采旄，右荫桂旗。攘皓腕于神浒兮，采湍濑之玄芝。"
          type="info"
        />
      </Loading>
    </>
  );
};

export default App;
