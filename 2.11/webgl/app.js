const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');

// Vertex Shader 处理顶点
const vertex = `
	attribute vec2 position;
	varying vec3 color;

	void main() {
		gl_PointSize = 1.0;
		color = vec3(0.5 + position * 0.5, 0.0);
		gl_Position = vec4(position * 0.5, 1.0, 1.0);
	}
`;

// Fragment Shader 处理光栅化后的像素信息
const fragment = `
	precision mediump float;
	varying vec3 color;

	void main() {
		gl_FragColor = vec4(color, 1.0);
	}
`;

// 创建顶点着色器
const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertex);
gl.compileShader(vertexShader);

// 创建片元着色器
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fragment);
gl.compileShader(fragmentShader);

// 创建webGLProgram对象, 将shader关联, 链接到上下文种
const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

// 启动
gl.useProgram(program);

// 定义三角形三个顶点
const points = new Float32Array([
	-1, -1,
	0, 1,
	1, -1,
]);

// 创建缓存对象, 绑定, 将数据写入缓存对象
const bufferId = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW);

// 将 buffer 的数据绑定给顶点着色器的 position 变量。
const vPosition = gl.getAttribLocation(program, 'position'); // 获取顶点着色器中的position变量的地址
gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0); // 给变量设置类型 长度
gl.enableVertexAttribArray(vPosition); // 激活变量

gl.clear(gl.COLOR_BUFFER_BIT);
gl.drawArrays(gl.TRIANGLES, 0, points.length / 2);




