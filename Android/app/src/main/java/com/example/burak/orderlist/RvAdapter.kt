package com.example.burak.orderlist

import android.support.v7.widget.RecyclerView
import android.view.LayoutInflater
import android.view.ViewGroup
import kotlinx.android.synthetic.main.list_items.view.*

class RvAdapter(private val items: MutableList<String>) : RecyclerView.Adapter<RvAdapter.VH>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): VH {
        println("Burda1 => ")
        return VH(parent)
    }

    override fun onBindViewHolder(holder: VH, position: Int) {
        holder.bind(items[position])
        println("Burda2 => ")
    }

    override fun getItemCount(): Int = items.size

    fun addItem(name: String) {
        println("Burda3 => ")
        items.add(name)
        notifyItemInserted(items.size)
    }

    fun removeAt(position: Int) {
        items.removeAt(position)
        notifyItemRemoved(position)
    }

    class VH(parent: ViewGroup) : RecyclerView.ViewHolder(
            LayoutInflater.from(parent.context).inflate(R.layout.list_items, parent, false)) {

        fun bind(name: String) = with(itemView) {
            println("Burda4 => ")
            rowName.text = name
        }
    }
}