### Notes

##### 	Efficiency

```
``` There are no magic rules for making code more efficient. Efficiency is achieved through careful tradeoffs, and these tradeoffs are different for different architectures. ```
However, for the foreseeable future, a good heuristic is thar programmers should pay more attention to memory access patterns than to operation counts. 
This is the opposite of the best heuristic of two decades ago. This switch has occurred beacuse the speed of memory has not kept pace with the speed of processors. Since that trend continues, the importance of limited and coherent memory access for optimization should only increase  -- 1.6 P7
```



##### 		Float vs. Double

`Modern architecture suggests that keeping memory use down and maintaining coherent memory access are the keys to efficiency. This suggests using single-precision data. However, avoiding numerical prob lems suggests using double-precison arithmetic. The tradeoffs depend on the program, but it is nice to have a default in your class definitions.`

`I suggest using doubles for geometric computation and floats for color computation. For data that occupies a lot of memory, such as triangle meshes, I suggest storing float data, but converting to double when data are accessed through member functions`

`I advocate doing all computations with floats until you find evidence that double precision is neeeded in a particular part of the code` --1.72 P9



##### Dot(scalar) Product

2个向量相乘得到一个数   方便得到2个向量间的夹角

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451145.png" alt="image-20220215180701371" style="zoom: 33%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451788.png" alt="image-20220215180731104" style="zoom: 33%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451799.png" alt="image-20220215180840038" style="zoom:33%;" />

  投影

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451802.png" alt="image-20220215181039787" style="zoom:33%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451778.png" alt="image-20220215181308775" style="zoom:33%;" />

(虚线上>0, 反之<0)

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451758.png" alt="image-20220215181425904" style="zoom:33%;" />

##### Cross Product

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451897.png" alt="image-20220215182746075" style="zoom:33%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451747.png" alt="image-20220215182907565" style="zoom:33%;" />

x × y = z -> 右手坐标系

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451885.png" alt="image-20220215183147485" style="zoom:33%;" />

叉积的作用

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451850.png" alt="image-20220215183234451" style="zoom:33%;" />



<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451765.png" alt="image-20220215183852698" style="zoom:33%;" />

##### Matrix

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451190.png" alt="image-20220215184142560" style="zoom:33%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451628.png" alt="image-20220215184243302" style="zoom:33%;" />

26(2,4) = (row2) · (column4) = (5,2) · (4,3) = 5 * 4 + 2 * 3 = 26

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451969.png" alt="image-20220215184643731" style="zoom:33%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451034.png" alt="image-20220215184823814" style="zoom:33%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451022.png" alt="image-20220215184919241" style="zoom:33%;" />

Special 

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451052.png" alt="image-20220215185108460" style="zoom:33%;" />

##### Vector multiplication in  Matrix form

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451335.png" alt="image-20220215185148530" style="zoom:33%;" />

A* -> 变为矩阵 * b(向量)



##### Reflection Matrix

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451193.png" alt="image-20220216233545119" style="zoom:50%;" />

##### Shear Matrix

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451094.png" alt="image-20220216233943582" style="zoom:33%;" />

##### Linear Transform  Matrices

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451999.png" alt="image-20220216234942453" style="zoom:33%;" />

##### Homogeneous Coordinates(2D)*

**齐次坐标**

From Translate 

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451078.png" alt="image-20220216235243086" style="zoom:33%;" />

(So, translation is NOT linear transform!!)

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451147.png" alt="image-20220217000031230" style="zoom:33%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451360.png" alt="image-20220217000043971" style="zoom:33%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451882.png" alt="image-20220217000408442" style="zoom:33%;" />

point + point = middle point



<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451229.png" alt="image-20220217000449302" style="zoom:33%;" />

Inverse Transform

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451543.png" alt="image-20220217145638518" style="zoom:33%;" />

##### Matrix Multipication*

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451502.png" alt="image-20220217150045274" style="zoom:33%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451509.png" alt="image-20220217151101145" style="zoom:33%;" />

From right to left 



##### 3D Transformations

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451528.png" alt="image-20220217151906028" style="zoom:33%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451754.png" alt="image-20220223004614780" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451291.png" alt="image-20220217152101075" style="zoom:33%;" />

先 线性变化(Linear Transform) 再 平移(Translation)



Rotation

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451028.png" alt="image-20220218163743133" style="zoom:33%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451844.png" alt="image-20220218164342504" style="zoom:33%;" />

##### MVP(model view projection)

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451890.png" alt="image-20220222144005016" style="zoom:50%;" />

###### View/Camera Transformation

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451012.png" alt="image-20220222144427693" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451824.png" alt="image-20220222145058413" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451434.png" alt="image-20220222145121241" style="zoom:50%;" />

###### Projection Transformation

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451314.png" alt="image-20220222150156019" style="zoom:50%;" />

正交投影 && 透视投影(一叶障目)

是否有近大远小

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451177.png" alt="image-20220222150628345" style="zoom:50%;" />

**Orthographic projection**

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451184.png" alt="image-20220222150922523" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451113.png" alt="image-20220222151155708" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451056.png" alt="image-20220222151627811" style="zoom:50%;" />

平移 -> 缩放 

矩阵运算

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451796.png" alt="image-20220222151502785" style="zoom:50%;" />



**Perspective Projection**

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451129.png" alt="image-20220223004356758" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451266.png" alt="image-20220223005407749" style="zoom:50%;" />

近平面不动

远平面z轴不动、中心不动

Frustum -> 挤压成 -> cuboid



y -> 

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451566.png" alt="image-20220223005712011" style="zoom:50%;" />

x -> 

z -> 

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451675.png" alt="image-20220223005916391" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451778.png" alt="image-20220223010231549" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451940.png" alt="image-20220223010347452" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451189.png" alt="image-20220223010647823" style="zoom:50%;" />

A -> 

B -> 

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451503.png" alt="image-20220223010901144" style="zoom:50%;" />



##### Raster && Pixel

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451796.png" alt="image-20220223124836509" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451258.png" alt="image-20220223125200145" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451857.png" alt="image-20220223125448081" style="zoom:50%;" />

##### Triangles

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451109.png" alt="image-20220224113714821" style="zoom:50%;" />

**Sample**

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451612.png" alt="image-20220224114230185" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451492.png" alt="image-20220224114154636" style="zoom:50%;" />

判断像素中心是否在三角形内

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451046.png" alt="image-20220224114322898" style="zoom:50%;" />

在 -> 1 不在 -> 0



<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451393.png" alt="image-20220224114624809" style="zoom:50%;" />

P0P1 x Q 

P1P2 x Q  

P2P0 x Q 

AB -> BC -> CA



##### Aliasing

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451890.png" alt="image-20220224123047986" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452260.png" alt="image-20220224123545589" style="zoom:50%;" />

Artifacts(erros mistakes inaccuracies) in computer graphics

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191451773.png" alt="image-20220224123813109" style="zoom:50%;" />



##### Antialiasing

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452215.png" alt="image-20220224124058860" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452407.png" alt="image-20220224124119044" style="zoom:50%;" />

Sample  < = > Frequencies

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452861.png" alt="image-20220224125648470" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452034.png" alt="image-20220224125901553" style="zoom:50%;" />

采样 在蓝函数和黑函数上一样, 但函数完全不一样

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452499.png" alt="image-20220224130558451" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452671.png" alt="image-20220224130625292" style="zoom:50%;" />

高(频)通过滤 -> 获得大致的边界

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452705.png" alt="image-20220224130702909" style="zoom:50%;" />

低(频)通过滤 -> 模糊效果

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452241.png" alt="image-20220224130824728" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452144.png" alt="image-20220224130859307" style="zoom:50%;" />

Filtering = Averaging = Convolution 

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452422.png" alt="image-20220224131305853" style="zoom:50%;" />

图形学上简化的(信号)卷积 

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452070.png" alt="image-20220224131350796" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452282.png" alt="image-20220224131528594" style="zoom:50%;" />



**Sampling = Repeating Frequency Contents**

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452288.png" alt="image-20220224132744399" style="zoom:50%;" />

**Aliasing = Mixed Frequency Contents**

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452203.png" alt="image-20220224132958329" style="zoom:50%;" />



<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452428.png" alt="image-20220224133212541" style="zoom:50%;" />



<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452537.png" alt="image-20220224133620780" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452569.png" alt="image-20220224133736439" style="zoom:50%;" />

(原)白色 -> (后)亮度显示

##### Z-buffer

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452669.png" alt="image-20220302174717835" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452076.png" alt="image-20220302174740480" style="zoom:50%;" />

黑色 -> 近

白色(地板) -> 远(p2)



<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452697.png" alt="image-20220302175042878" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452658.png" alt="image-20220302175533647" style="zoom:50%;" />

z-buffer (蓝)4 > (红)5

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452798.png" alt="image-20220302232714736" style="zoom:50%;" />

**Most important visibility algorithm**



computer render

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452438.png" alt="image-20220302233635440" style="zoom:50%;" />

##### Shading

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452951.png" alt="image-20220302233738155" style="zoom:50%;" />



<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452737.png" alt="image-20220302234008182" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452416.png" alt="image-20220302234327682" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452637.png" alt="image-20220302234636132" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452142.png" alt="image-20220302234909198" style="zoom:50%;" />

漫反射

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452309.png" alt="image-20220303002812902" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452447.png" alt="image-20220303003613136" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452809.png" alt="image-20220303004159015" style="zoom:50%;" />

高光

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452821.png" alt="image-20220303005252217" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452260.png" alt="image-20220303005412688" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452903.png" alt="image-20220303010001447" style="zoom:50%;" />

p 控制高光(大小)



环境光

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452188.png" alt="image-20220303010104284" style="zoom:50%;" />



Blinn-Phong Reflection

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452209.png" alt="image-20220303010252989" style="zoom:50%;" />

##### Graphics Pipeline

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452107.png" alt="image-20220304004301919" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452320.png" alt="image-20220304004420246" style="zoom:50%;" />



<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452628.png" alt="image-20220304005849218" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452255.png" alt="image-20220304005907927" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452488.png" alt="image-20220304005927338" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452472.png" alt="image-20220304005950327" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452305.png" alt="image-20220304010137096" style="zoom:50%;" />



首先，**数据经过 CPU 处理，成为具有特定结构的几何信息。然后，这些信息会被送到 GPU 中进行处理。在 GPU 中要经过两个步骤生成光栅信息。这些光栅信息会输出到帧缓存中，最后渲染到屏幕上。**

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452579.jpeg" alt="img" style="zoom: 25%;" />

**这个绘图过程是现代计算机中任意一种图形系统处理图形的通用过程。**

它主要做了两件事，一是对给定的数据结合绘图的场景要素（例如相机、光源、遮挡物体等等）进行计算，最终将图形变为屏幕空间的 2D 坐标。

二是为屏幕空间的每个像素点进行着色，把最终完成的图形输出到显示设备上。

这整个过程是一步一步进行的，前一步的输出就是后一步的输入，所以我们也把这个过程叫做渲染管线（RenderPipelines）。

##### Shader

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452044.png" alt="image-20220304010341027" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452673.png" alt="image-20220304010725338" style="zoom:50%;" />



<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452823.png" alt="image-20220304011453353" style="zoom: 80%;" />

gpu并行度非常高



##### Texture Mapping

texture 

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452747.png" alt="image-20220308001044089" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452349.png" alt="image-20220308001254734" style="zoom:50%;" />

<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452400.png" alt="image-20220308001459850" style="zoom:50%;" />

u -> r(0.-1.0)

v -> g(0.-1.0)



<img src="https://first-1303075678.cos.ap-beijing.myqcloud.com/img/202203191452169.png" alt="image-20220308001753538" style="zoom:50%;" />

