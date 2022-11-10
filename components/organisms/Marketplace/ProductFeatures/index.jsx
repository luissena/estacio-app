const features = [
    { name: 'Origem', description: 'Fabricado na Mata Atlântica do Alaska' },
    { name: 'Material', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' }, 
    { name: 'Dimensões', description: '6.25" x 3.55" x 1.15"' },
    { name: 'Acabamento', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
    { name: 'Incluido', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
    { name: 'Considerações', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
  ]
  
  export default function ProductFeatures() {
    return (
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Especificações técnicas</h2>
            <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit aliquid placeat voluptates aperiam nihil, exercitationem deserunt magni! Quos fugit dolore eius, quasi perferendis labore consequuntur inventore animi, vero nobis suscipit?
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
    )
  }
  