import Link from "next/link"
import { FC } from "react"


interface PropsPaginationProducts {
  totalPages: number,
  offset: number,
  limit: number,
  hasNextPage: boolean,
  query: string
}

const PaginatorProducts: FC<PropsPaginationProducts> = ({ limit, offset, totalPages, hasNextPage, query }) => {

  const value = offset && !isNaN(Number(offset)) ? offset + limit : 0 + limit
  const previousValue = offset - limit
  const hasPreviousPage = offset === limit || offset > limit

  const currentPage = Math.ceil(offset/limit + 1)

  return (
    <div className="w-full flex justify-center gap-4 items-center mt-2">
      {
        hasPreviousPage
          ? (
            <Link
              href={`/items?q=${query}&offset=${previousValue}&limit=${limit}`}
              className="text-xs text-secondary-base border-2 border-secondary-light p-2 rounded-lg capitalize font-semibold hover:bg-secondary-base hover:text-white active:bg-secondary-dark transition-all ease-in duration-200"
            >
              anterior
            </Link>
          )
          : null
      }
      {
        hasNextPage
          ? (
            <Link
              href={`/items?q=${query}&offset=${value}&limit=${limit}`}
              className="text-xs text-secondary-base border-2 border-secondary-light p-2 rounded-lg capitalize font-semibold hover:bg-secondary-base hover:text-white active:bg-secondary-dark transition-all ease-in duration-200"
            >
              siguiente
            </Link>
          )
          : null
      }
      <span className="text-secondary-light font-semibold flex items-center"><strong className="text-xl text-secondary-dark">{currentPage}</strong>  -  {totalPages}</span>
      
    </div>
  )
}

export default PaginatorProducts