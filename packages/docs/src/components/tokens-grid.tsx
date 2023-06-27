import React from 'react'
import '../styles/tokens-grid.css'

interface TokensGridProps {
	tokens: Record<string, string>;
	withPx?: boolean;
	fonts?: boolean;
}

export function TokensGrid({
	tokens,
	withPx = false,
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
				</tr>
			</thead>

			<tbody>
				{Object.entries(tokens).map(([key, value]) => (
					<tr key={key}>
						<td>{key}</td>
						<td>{value}</td>
						{withPx ? <td>{toPx(value)}</td> : null}
					</tr>
				))}
			</tbody>
		</table>
	)
}