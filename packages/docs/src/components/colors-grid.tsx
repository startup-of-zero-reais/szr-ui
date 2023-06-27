import React from 'react'
import { colors } from '@szr-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
	const every11 = (i: number, result: string, def: string) => 
		Array.from({ length: 22 })
			// progression every 11
			// Ex:
			//
			//	0*10-1+0 = -1
			//	1*10-1+1 = 10
			//	2*10-1+2 = 21
			//	3*10-1+3 = 32
			//	etc ...
			.map((_, j) => (j*10)-1+j)
			.includes(i)
			? result
			: def

	return (
		<div>
			{Object.entries(colors)
				.map(([color, hex], key) => (
					<div key={key} style={{ backgroundColor: hex, padding: '0.825rem', marginBottom: every11(key, '1rem', '0') }}>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								fontFamily: 'monospace',
								color: getContrast(hex, '#FFF') < 3.5 ? '#222222' : '#efefef',
							}}
						>
							<strong>{key} ${color}</strong>
							<span>{hex}</span>
						</div>
					</div>
				))}
		</div>
	)
}