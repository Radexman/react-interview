import { createRoot } from 'react-dom/client';
import LinkElement from './components/LinkElement';

const element = (
	<>
		<h1>Nasza strona!</h1>
		<main>
			<LinkElement
				text='Super strona kursu'
				redirect={true}
			/>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente earum mollitia, ut iure labore nam in
				asperiores tenetur incidunt. Vel debitis doloremque repellendus quibusdam voluptatem non soluta ad
				dolore temporibus.
			</p>
			<LinkElement
				text='Strona kursu'
				redirect={false}
			/>
		</main>
	</>
);

createRoot(document.getElementById('root')!).render(element);
