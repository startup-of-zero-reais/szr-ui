import React from 'react'
import '../styles/tokens-grid.css'

interface TokensGridProps {
	tokens: Record<string, string>;
	withPx?: boolean;
	shadowed?: boolean;
}

export function TokensGrid({
	tokens,
	withPx = false,
	shadowed = false,
}: TokensGridProps) {
	const toPx = (value: string) => {
		if (/.+rem$/i.exec(value)) {
			return (Number(value.replace(/rem/, ''))*16) + 'px'
		}

		if (/.+px$/i.exec(value)) {
			return Number(value.replace(/px/, '')) + 'px'
		}

		return value
	}


	return (
		<table className='tokens-grid'>
			<thead>
				<tr>
					<th>Name</th>
					<th>Value</th>
					{withPx ? <th>Pixels</th> : null}
					{shadowed ? <th style={{ textAlign: 'center' }}>Example</th> : null}
				</tr>
			</thead>

			<tbody>
				{Object.entries(tokens).map(([key, value]) => (
					<tr key={key}>
						<td>{key}</td>
						<td>{value}</td>
						{withPx ? <td>{toPx(value)}</td> : null}
						{shadowed
							? (
								<td>
									<div style={{
										width: 32,
										height: 32,
										backgroundColor: '#efefef1A',
										boxShadow: value,
										border: 'none',
										borderRadius: '999px',
										margin: '0 auto'
									}}></div>
								</td>
							) : null}
					</tr>
				))}
			</tbody>
		</table>
	)
}
