#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

#define PI 3.14159265358979323846

vec2 rotate2D(vec2 _st, float _angle) {
	_st -= 0.5;
	_st = mat2(cos(_angle),-sin(_angle),
							sin(_angle),cos(_angle)) * _st;
	_st += 0.5;

	return _st;
}

vec2 tile(vec2 _st, float _zoom) {
	_st *= _zoom;
	return fract(_st);
}

vec2 rotateTilePattern(vec2 _st) {
	_st *= 2.0;
	//  Give each cell an index number
  //  according to its position
	float index = 0.;
	index += step(1., mod(_st.x,2.0));
	index += step(1., mod(_st.y,2.))*2.0;
	// 2 3
	// 0 1
	
	// Make each cell between 0.0 - 1.0
	_st = fract(_st);
	if (index == 1.0) {
		// Rotate cell 1 by 90 degrees
		_st = rotate2D(_st,PI*0.5);
	} else if (index == 2.0) {
		// Rotate cell 2 by -90 degrees
		_st = rotate2D(_st, PI*-0.5);
	} else if (index == 3.0) {
		// Rotate cell 3 by 180 degrees
		_st = rotate2D(_st,PI);
	}
	return _st;
}

void main() {
	vec2 st = gl_FragCoord.xy / u_resolution;
	st = tile(st,3.0);
	st = rotateTilePattern(st);
  st = tile(st,2.0);
  // st = rotate2D(st,-PI*u_time*0.25);
  st = rotateTilePattern(st*5.);
  // st = rotate2D(st,PI*u_time*0.25);
	gl_FragColor = vec4(vec3(step(st.x,st.y)),1.);
}

