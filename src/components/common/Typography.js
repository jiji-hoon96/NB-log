import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Typography = ({ textList }) => {
	const [typo, setTypo] = useState('');
	const [show, setShow] = useState(false);
	const [idx, setIdx] = useState(0);
	let event = null;

	const changeText = (cursor, originText, sign) => {
		if (sign && cursor - 1 === originText.length) return Promise.resolve();
		else if (!sign && cursor === 0) return Promise.resolve();
		const timer = sign ? 100 : 30 ;

		return new Promise((resolve, reject) => {
			event = setTimeout(() => {
				const nextCursor = sign ? cursor + 1 : cursor - 1;
				setTypo(originText.slice(0, cursor));
				resolve(changeText(nextCursor, originText, sign));
			}, timer);
		});
	}

	const inputText = () => {
		changeText(0, textList[idx], true).then(() => {
			event = setTimeout(() => setShow(true), 3000);
		});

	}

	const deleteText = () => {
		changeText(textList[idx].length, textList[idx], false).then(() => {
			setIdx((idx + 1) % textList.length)
			setShow(false);
		});
	}

	/* eslint-disable */
	useEffect(() => {
		if (show) {
			deleteText();
		} else {
			inputText();
		}

		return () => {
			if (event) {
				clearTimeout(event);
			}
		}
	}, [show]);
	/* eslint-enable */

	return <Content>{typo}</Content>;
}

const Content = styled.div`
	white-space: pre-wrap;
	font-size: 18px;
	font-weight: 200;
	text-align: center;
`;

export default React.memo(Typography)